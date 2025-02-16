import { Test } from '@nestjs/testing';
import { TagService } from './tag.service';

describe('TagService', () => {
  let service: TagService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TagService],
    }).compile();

    service = module.get(TagService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
