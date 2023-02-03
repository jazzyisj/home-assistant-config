const LitElement = customElements.get("hui-masonry-view") ? Object.getPrototypeOf(customElements.get("hui-masonry-view")) : Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};
window.customCards = window.customCards || [];

class MultilineEntityCard extends LitElement {

    handleTap(e) {
        handleClick(this, this._hass, this.config, this.config.tap_action, this.config.entity);
   }

  static get properties() {
    return {
      config: {},
      _hass: {},
    };
  }

    set hass(hass) {
      this._hass = hass;
    }

    setConfig(config) {
      if (!config.entity) {
        throw new Error('You need to define an entity');
      }
      this.config = config;
    }

    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 1;
    }

    render() {
      if (!this.config || !this._hass) {
        return html``;
      }

      this.numberElements = 0;
      this.showValue = "";

      const state = this._hass.states[this.config.entity];
      this.showValue = (state ? state.state : this._hass.localize("state.default.unknown"));

      if (this.config.attribute) {
        var showAttribute = state.attributes[this.config.attribute];
        this.showValue = (showAttribute ? showAttribute : this._hass.localize("state.default.unknown"));
      }

      if (!state) {
        return html`
          <style>
            .not-found {
              flex: 1;
              background-color: yellow;
              padding: 8px;
            }
          </style>
          <ha-card>
            <div class="not-found">
              Entity not available: ${this.config.entity}
            </div>
          </ha-card>
        `;
      }

    //check if value is valid date object
    if (Date.parse(this.showValue) > 0) {

        //entity is an input_datetime helper
        if (this.config.entity.indexOf("input_datetime.") == 0) {
            var hasDate = this._hass.states[this.config.entity]['attributes']['has_date'];
            var hasTime = this._hass.states[this.config.entity]['attributes']['has_time'];

            //default to just parsing time object
            var today = new Date().toLocaleDateString('en-GB', { year: "numeric", month: "short", day: "numeric" })

            var value = new Date(today + " " + this.showValue).toLocaleTimeString('en-GB')

            if (hasDate) {
                //parse only date object if has_date is true
                var value = new Date(this.showValue).toLocaleDateString('en-GB', { year: "numeric", month: "short", day: "numeric" })
                //parse datetime object if has_date & has_time are true
                if (hasTime) {
                var value = new Date(this.showValue).toLocaleDateString('en-GB', { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
                }
            }
        } else {
            let isTimeHas = /:/.test(this.showValue)

            var value = new Date(this.showValue).toLocaleDateString('en-GB', { year: "numeric", month: "short", day: "numeric" })

            if (isTimeHas) {
                var value = new Date(this.showValue).toLocaleDateString('en-GB', { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
            }

        }

        this.showValue = value
      }

      var uom = this._hass.states[this.config.entity]['attributes']['unit_of_measurement'];
      var uomPrefix = "";
      var uomSuffix = "";

      if (uom != undefined && uom.length > 0) {
        if (this.config.unit_of_measurement == "prefix") {
          uomPrefix = uom;
        }
        if (this.config.unit_of_measurement == "suffix"){
          uomSuffix = uom;
        }
      }


      return html`
        <ha-card @click=${(e) => this.handleTap(e)}>
        <div class="header">
          <div class="name">
          ${this.config.show_name == false ?
            ' ' :
            `${this.config.name == undefined ?
              state.attributes.friendly_name :
              this.config.name
            }`
          }
          </div>

          ${this.config.image == undefined ?
                this.config.show_icon == false ? '' : html`
                  <ha-icon icon="${state.attributes.icon == undefined ?
                    "mdi:eye" :
                    state.attributes.icon
                  }" ></ha-icon>` : html`
              <img src="${
                this.config.image
              }" height=25></img>`
          }


        </div>
        <div class="info">
          <span class="value">
            ${uomPrefix}
            ${this.stringToHTML(this.showValue)}
            ${uomSuffix}
          </span>
        </div>
        </ha-card>
      `;
    }

    stringToHTML = function (str) {
      var t = document.createElement('template');
      t.innerHTML = str;
      return t.content;
    };

    static get styles() {
      return css`
      ha-card {
        cursor: pointer;
      }
      .header{
        padding: 8px 16px 0px;
        display: flex;
        justify-content: space-between;
      }
      .name{
        color: var(--secondary-text-color);
        line-height: 40px;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      ha-icon{
        color: var(--state-icon-color, #44739e);
        line-height: 40px;
      }
      .info{
        padding: 0px 16px 16px;
        overflow: hidden;
        line-height: 28px;
      }
      .value{
        font-size: 28px;
        margin-right: 4px;
      }
      `;
    }

}

const handleClick = (node, hass, config, tapAction, entity) => {
    let e;
    // eslint-disable-next-line default-case
  if (tapAction != undefined) {
    switch (tapAction.action) {
      case 'more-info':
        if (tapAction.data != undefined && tapAction.data.target != undefined && tapAction.data.target.entity_id != undefined) {
          entity = { entityId: tapAction.data.target.entity_id };
        } else {
          entity = { entityId: entity || config.entity };
        }

        fireEvent(node, "hass-more-info", entity);
        break;
      case 'navigate':
        if (!tapAction.navigation_path) return;
        // eslint-disable-next-line no-restricted-globals
        history.pushState(null, '', tapAction.navigation_path);
        e = new Event('location-changed', { composed: true });
        e.detail = { replace: false };
        window.dispatchEvent(e);
        break;

      case 'call-service':
        if (!tapAction.service) return;
        // eslint-disable-next-line no-case-declarations
        const [domain, service] = tapAction.service.split('.', 2);
        // eslint-disable-next-line no-case-declarations
        const serviceData = { ...tapAction.data.target };

        hass.callService(domain, service, serviceData);
    }
  } else {
    fireEvent(node, "hass-more-info", { entityId: entity || config.entity });
  }

  };

  customElements.define('multiline-entity-card', MultilineEntityCard);
