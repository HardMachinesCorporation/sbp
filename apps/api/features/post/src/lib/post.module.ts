import { Module } from '@nestjs/common';
import { PostService } from './post.service';

@Module({
  controllers: [],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
