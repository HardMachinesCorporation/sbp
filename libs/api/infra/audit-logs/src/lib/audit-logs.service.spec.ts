import { Test } from '@nestjs/testing';
import { AuditLogsService } from './audit-logs.service';

describe('AuditLogsService', () => {
  let service: AuditLogsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuditLogsService],
    }).compile();

    service = module.get(AuditLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
