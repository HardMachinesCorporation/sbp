import { Module } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';

@Module({
  controllers: [],
  providers: [AuditLogsService],
  exports: [AuditLogsService],
})
export class AuditLogsModule {}
