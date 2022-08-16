"""Set the state or other attributes for the specified entity."""

# ========================================================================================
# python_scripts/set_state.py
# modified from -
# https://community.home-assistant.io/t/how-to-manually-set-state-value-of-sensor/43975/37
# ========================================================================================

# ----------------------------------------------------------------------------------------
# Set the state or other attributes for the specified entity.
# Updates from @xannor so that a new entity can be created if it does not exist.
# ----------------------------------------------------------------------------------------
import csv

csv_file = "/config/www/internet_radio.csv"

# csv_reader = csv.DictReader(open(csv_file), delimiter=";")
# station_list = [dict(d) for d in csv_reader]

# sensor = "streaming_radio_stations"
# state = "ok"
# attributes = '{"stations": ' + str(station_list) + "}"

# data = '{"state": "' + str(state) + '", "attributes": ' + attributes + '}'
# data = data.replace("'",'"')
# print(data)

# hass.states.set(sensor, state, attributes)
