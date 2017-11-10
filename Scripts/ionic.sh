#!/bin/bash
npm install -g ionic 2>&1
cd /home/ubuntu/charts/
rm -r node_modules 2>&1
npm install 2>&1
sudo npm rebuild node-sass 2>&1
apt install awscli 2>&1
pip install -U awscli 2>&1
aws s3 cp /home/ubuntu/charts/www/ s3://charts-ionic-dev-us-east-1/files_from_ec2 --recursive 
ionic build 2>&1
