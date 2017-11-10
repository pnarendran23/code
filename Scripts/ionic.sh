#!/bin/bash
npm install -g ionic
cd /home/ubuntu/charts/
rm -r node_modules
npm install
ionic build
