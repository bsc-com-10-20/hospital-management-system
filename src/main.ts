import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
  .setTitle('Hospital Management System')
  .setDescription('Our description goes here.....')
  .setVersion('1.0')
  .addTag('Developed By Rizzle')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3306);
}
bootstrap();
