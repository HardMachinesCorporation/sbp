import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Module({
  controllers: [],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
