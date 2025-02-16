import { Test } from '@nestjs/testing';
import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ValidationService],
    }).compile();

    service = module.get(ValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
