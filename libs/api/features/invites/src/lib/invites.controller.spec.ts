import { Test } from '@nestjs/testing';
import { InvitesController } from './invites.controller';
import { InvitesService } from './invites.service';

describe('InvitesController', () => {
  let controller: InvitesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvitesService],
      controllers: [InvitesController],
    }).compile();

    controller = module.get(InvitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
