import { Test } from '@nestjs/testing';
import { RolesService } from './roles.service';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RolesService],
    }).compile();

    service = module.get(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
