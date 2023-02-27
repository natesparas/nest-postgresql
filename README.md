# serverless-localstack-lambda

This is a sample project showcasing Devcontainer and AWS Lambda using LocalStack.

<br>

The first time you do this, it may take a little while as it needs to build the Docker image. After the first load, each time you open the project, it should be much quicker (Unless you change the Dockerfile).

# Running the app

> [!IMPORTANT]
> Please wait for the container to finish building its dependencies and packages

## Import the postman collection found in the project folder

After building the container, copy the `endpoint` and paste it on the postman collection variable

sample endpoint: http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_


***********************
**Postman Calls & Methods**
***********************

GET : [http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles](http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles)

<br>

POST : [http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles](http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles)

|Body           |
|---------------|
|title          |
|description    |
|body           |
|published      |

<br>

GET : [http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id](http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id)

<br>

PATCH : [http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id](http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id)

|Body           |
|---------------|
|title          |
|description    |
|body           |
|published      |

<br>

DELETE : [http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id](http://localhost:4566/restapis/5kyphlxqpy/local/_user_request_/articles/:id)
