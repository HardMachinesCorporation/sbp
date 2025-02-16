import { Test } from '@nestjs/testing';
import { LikeService } from './like.service';

describe('LikeService', () => {
  let service: LikeService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LikeService],
    }).compile();

    service = module.get(LikeService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
