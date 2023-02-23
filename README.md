# serverless-localstack-lambda

This is a sample project showcasing Devcontainer and AWS Lambda using LocalStack.

## Installation

Make sure you have postgres container setup on your machine

## Change the database url found in .env file base on your postgres container setup

```
postgresql://<user>:<password>@<host>:<port>/nest-db?schema=public
```

## Running the app

Import the postman collection found in the project folder

<br>

The first time you do this, it may take a little while as it needs to build the Docker image. After the first load, each time you open the project, it should be much quicker (Unless you change the Dockerfile).

You are now using the Dev Container in VS Code. When you open the terminal, you are inside the container. Plugins are running inside the container too.

To deploy function in the `LocalStack` open the VS Code terminal and run the following command:

```
serverless deploy --stage local
```

To check the service deployed successfully. Run the following command

```
serverless info --stage local
```

You can check the logs inside Portainer or go to your [LocalStack Cloud](https://app.localstack.cloud)

## How to call or test the REST API?


### Using Postman or other REST Client

Open Postman and make a new request

Copy the `endpoint` from the result of `serverless info --stage local` and paste it to Postman Client. 

For example: http://localhost.localstack.cloud:4566/restapis/p268u4qr3j/local/_user_request_/articles