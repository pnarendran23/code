#!/bin/bash
npm install -g ionic 2>&1
cd /home/ubuntu/charts/ 2>&1
rm -r node_modules 2>&1
npm install 2>&1
sudo rebuild node-sass 2>&1
cd /home/ubuntu/charts/ 2>&1
ionic build
