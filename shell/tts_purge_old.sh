#!/bin/bash

# https://www.vionblog.com/linux-delete-files-older-than-x-days/
find /config/tts/ -type f -name '*.wav' -mtime +7 -exec rm {} \;