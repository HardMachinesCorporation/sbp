import { Module } from '@nestjs/common';
import { InviteService } from './invite.service';

@Module({
  controllers: [],
  providers: [InviteService],
  exports: [InviteService],
})
export class InviteModule {}
