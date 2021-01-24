#!/bin/bash

# https://www.vionblog.com/linux-delete-files-older-than-x-days/
find /config/www/alarm_snapshots/ -type f -name '*.jpg' -exec rm {} \;
