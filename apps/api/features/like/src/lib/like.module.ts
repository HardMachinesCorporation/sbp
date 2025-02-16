import { Module } from '@nestjs/common';
import { LikeService } from './like.service';

@Module({
  controllers: [],
  providers: [LikeService],
  exports: [LikeService],
})
export class LikeModule {}
