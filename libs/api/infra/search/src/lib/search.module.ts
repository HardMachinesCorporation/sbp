import { Module } from '@nestjs/common';
import { SearchService } from './search.service';

@Module({
  controllers: [],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
