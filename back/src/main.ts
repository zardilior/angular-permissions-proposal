import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZipkinLoggerService } from './zipkin-logger/zipkin-logger.service';
const bodyParser = require('body-parser')
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    logger: false,
    bodyParser: false,
  });

  const zipkinLogger = new ZipkinLoggerService()

  app.useLogger(zipkinLogger);
  app.enableCors();

  const tracer = zipkinLogger.tracer;

  app.use(bodyParser.json());
  app.use(zipkinMiddleware({ tracer }))

  await app.listen(3000);
}
bootstrap();
