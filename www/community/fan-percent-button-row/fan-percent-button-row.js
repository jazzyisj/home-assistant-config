window.customCards = window.customCards || [];
window.customCards.push({
  type: "fan-percent-button-row",
  name: "fan percent button row",
  description: "A plugin to display your fan controls in a button row.",
  preview: false,
});

class CustomFanPercentRow extends Polymer.Element {

	static get template() {
		return Polymer.html`
			<style is="custom-style" include="iron-flex iron-flex-alignment"></style>
			<style>
				:host {
					line-height: inherit;
				}
				.percentage {
					margin-left: 2px;
					margin-right: 2px;
					background-color: #759aaa;
					border: 1px solid lightgrey; 
					border-radius: 4px;
					font-size: 10px !important;
					color: inherit;
					text-align: center;
					float: right !important;
					padding: 1px;
					cursor: pointer;
				}
				
				</style>
					<hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
						<div class='horizontal justified layout' on-click="stopPropagation">
							<button
								class='percentage'
								style='[[_leftColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]]'
								toggles name="[[_leftName]]"
								on-click='setPercentage'
								disabled='[[_leftState]]'>[[_leftText]]</button>
							<button
								class='percentage'
								style='[[_midLeftColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]];[[_hideMidLeft]]'
								toggles name="[[_midLeftName]]"
								on-click='setPercentage'
								disabled='[[_midLeftState]]'>[[_midLeftText]]</button>
							<button
								class='percentage'
								style='[[_midRightColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]];[[_hideMidRight]]'
								toggles name="[[_midRightName]]"
								on-click='setPercentage'
								disabled='[[_midRightState]]'>[[_midRightText]]</button>
							<button
								class='percentage'
								style='[[_rightColor]];min-width:[[_width]];max-width:[[_width]];height:[[_height]]'
								toggles name="[[_rightName]]"
								on-click='setPercentage'
								disabled='[[_rightState]]'>[[_rightText]]</button>
						</div>
					</hui-generic-entity-row>
		`;
    }

    static get properties() {
		return {
			hass: {
				type: Object,
				observer: 'hassChanged'
			},
				_config: Object,
				_stateObj: Object,
				_offSP: Number,
				_lowSP: Number,
				_medSP: Number,
				_highSP: Number,
				_width: String,
				_height: String,
				_leftColor: String,
				_midLeftColor: String,
				_midRightColor: String,
				_rightColor: String,
				_leftText: String,
				_midLeftText: String,
				_midRightText: String,
				_rightText: String,
				_leftName: String,
				_midLeftName: String,
				_midRightName: String,
				_rightName: String,
				_hideMidLeft: String,
				_hideMidRight: String,
				_leftState: Boolean,
				_midLeftState: Boolean,
				_midRightState: Boolean,
				_rightState: Boolean,
				
		}
	}

	setConfig(config) {
		this._config = config;
		
		this._config = {
			customTheme: false,
			customSetpoints: false,
			reverseButtons: false,
			isTwoSpeedFan: false,
			sendStateWithSpeed: false,
			allowDisablingButtons: true,
			offPercentage: 0,
			lowPercentage: 33,
			medPercentage: 66,
			hiPercentage: 100,
			width: '30px',
			height: '30px',
			isOffColor: '#f44c09',
			isOnLowColor: '#43A047',
			isOnMedColor: '#43A047',
			isOnHiColor: '#43A047',
			buttonInactiveColor: '#759aaa',
			customOffText: 'OFF',
			customLowText: 'LOW',
			customMedText: 'MED',
			customHiText: 'HIGH',
			...config
		};
	}

	hassChanged(hass) {

		const config = this._config;
		const stateObj = hass.states[config.entity];
		const custTheme = config.customTheme;
		const custSetpoint = config.customSetpoints;
		const revButtons = config.reverseButtons;
		const twoSpdFan = config.isTwoSpeedFan;
		const sendStateWithSpeed = config.sendStateWithSpeed;
		const allowDisable = config.allowDisablingButtons;
		const buttonWidth = config.width;
		const buttonHeight = config.height;
		const OnLowClr = config.isOnLowColor;
		const OnMedClr = config.isOnMedColor;
		const OnHiClr = config.isOnHiColor;
		const OffClr = config.isOffColor;
		const buttonOffClr = config.buttonInactiveColor;
		const OffSetpoint = config.offPercentage;
		const LowSetpoint = config.lowPercentage;
		const MedSetpoint = config.medPercentage;
		const HiSetpoint = config.hiPercentage;
		const custOffTxt = config.customOffText;
		const custLowTxt = config.customLowText;
		const custMedTxt = config.customMedText;
		const custHiTxt = config.customHiText;
						
		let offSetpoint;
		let lowSetpoint;
		let medSetpoint;
		let hiSetpoint;
		let low;
		let med;
		let high;
		let offstate;
		
		if (custSetpoint) {
			offSetpoint = parseInt(OffSetpoint);
			medSetpoint = parseInt(MedSetpoint);
			if (parseInt(LowSetpoint) < 1) {
				lowSetpoint = 1;
			} else {
				lowSetpoint =  parseInt(LowSetpoint);
			}
			if (parseInt(HiSetpoint) > 100) {	
				hiSetpoint = 100;
			} else {
				hiSetpoint = parseInt(HiSetpoint);
			}
			if (stateObj && stateObj.attributes) {
				if (stateObj.state == 'on' && stateObj.attributes.percentage > offSetpoint && stateObj.attributes.percentage <= ((medSetpoint + lowSetpoint)/2) ) {
					low = 'on';
				} else if (stateObj.state == 'on' && stateObj.attributes.percentage > ((medSetpoint + lowSetpoint)/2) && stateObj.attributes.percentage <= ((hiSetpoint + medSetpoint)/2) ) {
					med = 'on';
				} else if (stateObj.state == 'on' && stateObj.attributes.percentage > ((hiSetpoint + medSetpoint)/2) && stateObj.attributes.percentage <= 100) {
					high = 'on';
				} else {
					offstate = 'on';
				}	
			}
		} else {
			offSetpoint = parseInt(OffSetpoint);
			lowSetpoint =  parseInt(LowSetpoint);
			medSetpoint = parseInt(MedSetpoint);
			hiSetpoint = parseInt(HiSetpoint);
			if (stateObj && stateObj.attributes) {
				if (stateObj.state == 'on' && stateObj.attributes.percentage >= 17 && stateObj.attributes.percentage <= 50) {
					low = 'on';
				} else if (stateObj.state == 'on' && stateObj.attributes.percentage >= 51 && stateObj.attributes.percentage <= 75) {
					med = 'on';
				} else if (stateObj.state == 'on' && stateObj.attributes.percentage >= 76 && stateObj.attributes.percentage <= 100) {
					high = 'on';
				} else {
					offstate = 'on';
				}
			}
		}
		
		let lowcolor;
		let medcolor;
		let hicolor;
		let offcolor;

				
		if (custTheme) {
			if (low == 'on') {
				lowcolor = 'background-color:' + OnLowClr;
			} else {
				lowcolor = 'background-color:' + buttonOffClr;
			}
			if (med == 'on') {
				medcolor = 'background-color:'  + OnMedClr;
			} else {
				medcolor = 'background-color:' + buttonOffClr;
			}
			if (high == 'on') {
				hicolor = 'background-color:'  + OnHiClr;
			} else {
				hicolor = 'background-color:' + buttonOffClr;
			}
			if (offstate == 'on') {
				offcolor = 'background-color:'  + OffClr;
			} else {
				offcolor = 'background-color:' + buttonOffClr;
			}
		} else {
			if (low == 'on') {
				lowcolor = 'background-color: var(--switch-checked-color)';
			} else {
				lowcolor = 'background-color: var(--switch-unchecked-color)';
			}
			if (med == 'on') {
				medcolor = 'background-color: var(--switch-checked-color)';
			} else {
				medcolor = 'background-color: var(--switch-unchecked-color)';
			}
			if (high == 'on') {
				hicolor = 'background-color: var(--switch-checked-color)';
			} else {
				hicolor = 'background-color: var(--switch-unchecked-color)';
			}
			if (offstate == 'on') {
				offcolor = 'background-color: var(--switch-checked-color)';
			} else {
				offcolor = 'background-color: var(--switch-unchecked-color)';
			}
		}

		let offtext = custOffTxt;
		let lowtext = custLowTxt;
		let medtext = custMedTxt;
		let hitext = custHiTxt;
		
		let buttonwidth = buttonWidth;
		let buttonheight = buttonHeight;
		
		let offname = 'off'
		let lowname = 'low'
		let medname = 'medium'
		let hiname = 'high'
		
		let hidemedium = 'display:block';
		let nohide = 'display:block';
		
		if (twoSpdFan) {
			hidemedium = 'display:none';
		} else {
			hidemedium = 'display:block';
		}
		
		if (revButtons) {
			this.setProperties({
				_stateObj: stateObj,
				_leftState: (offstate == 'on' && allowDisable),
				_midLeftState: (low === 'on' && allowDisable),
				_midRightState: (med === 'on'&& allowDisable),
				_rightState: (high === 'on' && allowDisable),
				_width: buttonwidth,
				_height: buttonheight,
				_leftColor: offcolor,
				_midLeftColor: lowcolor,
				_midRightColor: medcolor,
				_rightColor: hicolor,
				_offSP: offSetpoint,
				_lowSP: lowSetpoint,
				_medSP: medSetpoint,
				_highSP: hiSetpoint,
				_leftText: offtext,
				_midLeftText: lowtext,
				_midRightText: medtext,
				_rightText: hitext,
				_leftName: offname,
				_midLeftName: lowname,
				_midRightName: medname,
				_rightName: hiname,
				_hideMidLeft: nohide,
				_hideMidRight: hidemedium,
			});
		} else {
			this.setProperties({
				_stateObj: stateObj,
				_leftState: (high == 'on' && allowDisable),
				_midLeftState: (med === 'on'&& allowDisable),
				_midRightState: (low === 'on' && allowDisable),
				_rightState: (offstate === 'on'&& allowDisable),
				_width: buttonwidth,
				_height: buttonheight,
				_leftColor: hicolor,
				_midLeftColor: medcolor,
				_midRightColor: lowcolor,
				_rightColor: offcolor,
				_offSP: offSetpoint,
				_lowSP: lowSetpoint,
				_medSP: medSetpoint,
				_highSP: hiSetpoint,
				_leftText: hitext,
				_midLeftText: medtext,
				_midRightText: lowtext,
				_rightText: offtext,
				_leftName: hiname,
				_midLeftName: medname,
				_midRightName: lowname,
				_rightName: offname,
				_hideMidRight: nohide,
				_hideMidLeft: hidemedium,
			});
		}
	}

	stopPropagation(e) {
		e.stopPropagation();
	}
	
	setPercentage(e) {
		const level = e.currentTarget.getAttribute('name');
		const param = {entity_id: this._config.entity};
		if( level == 'off' ){
			this.hass.callService('fan', 'turn_off', param);
			param.percentage = this._offSP;
			this.hass.callService('fan', 'set_percentage', param);
		} else if (level == 'low') {
			if(this._config.sendStateWithSpeed){
			this.hass.callService('fan', 'turn_on', {entity_id: this._config.entity});
			}
			param.percentage = this._lowSP;
			this.hass.callService('fan', 'set_percentage', param);
		} else if (level == 'medium') {
			if(this._config.sendStateWithSpeed){
			this.hass.callService('fan', 'turn_on', {entity_id: this._config.entity});
			}
			param.percentage = this._medSP;
			this.hass.callService('fan', 'set_percentage', param);
		} else if (level == 'high') {
			if(this._config.sendStateWithSpeed){
			this.hass.callService('fan', 'turn_on', {entity_id: this._config.entity});
			}
			param.percentage = this._highSP;
			this.hass.callService('fan', 'set_percentage', param);
		}
	}
}
	
customElements.define('fan-percent-button-row', CustomFanPercentRow);

