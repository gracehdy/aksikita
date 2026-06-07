import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import { UnauthorizedFilter } from './common/filters/unauthorized.filter';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "http://localhost:3000", "*"], 
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        
      },
    },
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }));

  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true, 
  });

  app.setGlobalPrefix('api', {
    exclude: ['auth/(.*)', 'auth'],
  });

  app.useGlobalFilters(new UnauthorizedFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
