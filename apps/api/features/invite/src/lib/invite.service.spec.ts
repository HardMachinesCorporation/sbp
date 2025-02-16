import { Test } from '@nestjs/testing';
import { InviteService } from './invite.service';

describe('InviteService', () => {
  let service: InviteService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InviteService],
    }).compile();

    service = module.get(InviteService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
