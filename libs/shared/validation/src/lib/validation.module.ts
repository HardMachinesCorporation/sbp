import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';

@Module({
  controllers: [],
  providers: [ValidationService],
  exports: [ValidationService],
})
export class ValidationModule {}
