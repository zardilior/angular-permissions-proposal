import { Test, TestingModule } from '@nestjs/testing';
import { ZipkinLoggerService } from './zipkin-logger.service';

describe('ZipkinLoggerService', () => {
  let service: ZipkinLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZipkinLoggerService],
    }).compile();

    service = module.get<ZipkinLoggerService>(ZipkinLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
