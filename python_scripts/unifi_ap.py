from pyunifi.controller import Controller
from datetime import timedelta
import json
import re

#### fill in your unifi controller credentials ####

host = 'ip/url'
username = 'username'
password = 'password'
version = 'UDMP-unifiOS'
#### version ####
## the base version of the controller API [v4|v5|unifiOS|UDMP-unifiOS] ##
## this would be for the version of the controller you are running ##
#################
site_id = 'default'
port = '443'
verify_ssl = True
target_mac = '' ## the mac address of your AP device

client = Controller(host, username, password, port, version, site_id=site_id, ssl_verify=verify_ssl)
stat = client.get_sysinfo()
devs = client.get_device_stat(target_mac)
clients = client.get_clients()
numclients = devs['user-wlan-num_sta']
numguests = devs['guest-wlan-num_sta']
score = devs['satisfaction']
update = devs['upgradable']
cpu = devs['system-stats']['cpu']
ram = devs['system-stats']['mem']
activity = round(devs['uplink']['rx_bytes-r']/125000 + devs['uplink']['tx_bytes-r']/125000,1)
seconds = devs['uptime']
days = seconds // 86400
hours = (seconds - (days * 86400)) // 3600
minutes = (seconds - (days * 86400) - (hours * 3600)) // 60
uptime = str(days)+'d '+str(hours)+'h '+str(minutes)+'m'
wifi0clients = devs['radio_table_stats'][0]['user-num_sta']
wifi1clients = devs['radio_table_stats'][1]['user-num_sta']
wifi0score = devs['radio_table_stats'][0]['satisfaction']
wifi1score = devs['radio_table_stats'][1]['satisfaction']

final = json.dumps({"Clients":numclients,"Guests":numguests,"Clients_wifi0":wifi0clients ,"Clients_wifi1":wifi1clients ,"Score":score,"CPU":str(cpu),"RAM":str(ram),"Uptime":uptime,"Score_wifi0":wifi0score ,"Score_wifi1":wifi1score ,\
                "Activity":str(activity)+' Mbps',"Update":update})

print (final)
