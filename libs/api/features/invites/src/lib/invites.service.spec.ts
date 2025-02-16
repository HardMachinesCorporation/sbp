import { Test } from '@nestjs/testing';
import { InvitesService } from './invites.service';

describe('InvitesService', () => {
  let service: InvitesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvitesService],
    }).compile();

    service = module.get(InvitesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
