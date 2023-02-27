import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.init();

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
