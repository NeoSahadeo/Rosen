#!/usr/bin/bash

alacritty -e ./python_server.sh &
alacritty -e ./vite_server.sh & exit
