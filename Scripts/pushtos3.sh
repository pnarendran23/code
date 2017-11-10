#!/bin/bash
apt install awscli 2>&1
pip install -U awscli 2>&1
aws s3 cp /home/ubuntu/charts/www/ s3://charts-ionic-dev-us-east-1/files_from_ec2 --recursive 
