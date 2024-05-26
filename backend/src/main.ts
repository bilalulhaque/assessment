import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './core/filters/all-exceptions.filter';
import { WinstonModule } from 'nest-winston';
import { winstonConfig } from './core/logger/winston-logger.config';

async function bootstrap() {

  // Applying logging file here 
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(winstonConfig),
  });
  
  // Setting prefix with base url
  app.setGlobalPrefix('api/v1');

  // To only get the request body as defined in the dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Enabling CORS
  app.enableCors();

  
  await app.listen(3001);


}
bootstrap();
