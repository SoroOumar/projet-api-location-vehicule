import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API de location de vehicule by Mr Soro')
    .setDescription("Il s'agit d'une api qui permet de gerer la location de vehicules. On peut donc enregister, modifier, supprimer des vehicules et des contrats de location")
    .setVersion('1.0')
    .addTag('location')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
