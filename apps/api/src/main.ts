import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true, // allows cookie to be sent
  });

  app.setGlobalPrefix('api', {
    exclude: ['auth/(.*)', 'auth'],
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
