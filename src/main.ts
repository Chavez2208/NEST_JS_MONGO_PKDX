import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remueve la data basura
      forbidNonWhitelisted: true, //Encuentra los datos que no son propias de data
    })
  );
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
