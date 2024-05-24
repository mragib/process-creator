import { Controller, Post, Body } from '@nestjs/common';
import { LogTimeService } from './log-time.service';

import { Process } from 'src/process/entities/process.entity';

@Controller('log-time')
export class LogTimeController {
  constructor(private readonly logTimeService: LogTimeService) {}

  @Post()
  create(@Body() process: Process) {
    return this.logTimeService.create(process);
  }
}
