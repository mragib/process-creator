import { Module } from '@nestjs/common';
import { LogTimeService } from './log-time.service';
import { LogTimeController } from './log-time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTime } from './entities/log-time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogTime])],
  controllers: [LogTimeController],
  providers: [LogTimeService],
  exports: [LogTimeService],
})
export class LogTimeModule {}
