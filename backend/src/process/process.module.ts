import { Module } from '@nestjs/common';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Process } from './entities/process.entity';
import { LogTimeModule } from 'src/log-time/log-time.module';

@Module({
  imports: [TypeOrmModule.forFeature([Process]), LogTimeModule],
  controllers: [ProcessController],
  providers: [ProcessService],
})
export class ProcessModule {}
