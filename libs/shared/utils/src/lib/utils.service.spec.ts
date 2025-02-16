import { Test } from '@nestjs/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    service = module.get(UtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
