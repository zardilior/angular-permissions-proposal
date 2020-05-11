import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { tracer } from './tracer';
import { ZipkinLoggerService } from './zipkin-logger/zipkin-logger.service';
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    logger: new ZipkinLoggerService()
  });
  app.enableCors();
  app.use(zipkinMiddleware({tracer}))
  await app.listen(3000);
}
bootstrap();
