import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { UnauthorizedFilter } from './common/filters/unauthorized.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true, // allows cookie to be sent
  });

  app.setGlobalPrefix('api', {
    exclude: ['auth/(.*)', 'auth'],
  });

  app.useGlobalFilters(new UnauthorizedFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
