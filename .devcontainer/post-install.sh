#!/bin/sh 

echo "########### Installing all dependencies ##########"
npm install

echo "########### Installing Layers ###########"
npm run build
# npm run envGen
# npm run layers:build
# npm run layers:copy
# npm run install:sls-local

# echo "########### Creating Tables in serverless.yml Localstack ###########"
# cd src/serverless-entrypoint && serverless deploy --stage local

echo "########### Configure profile ############"
aws configure set aws_access_key_id test --profile=default
aws configure set aws_secret_access_key test --profile=default
aws configure set region ap-southeast-1 --profile=default

echo "########### Listing profile ############"
aws configure list --profile=default

# echo "########### Run Seeder and ENV generator ############"
# cd ../../
# npm run seeder
# npm run s3Create

echo "########### Migrating Database ############"
npm run migrate
# serverless offline

echo "########### Deploying serverless to localstack ###########"
serverless deploy --stage local