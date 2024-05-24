import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { LogTime } from './entities/log-time.entity';
import { Repository } from 'typeorm';
import { Process } from 'src/process/entities/process.entity';

@Injectable()
export class LogTimeService {
  constructor(
    @InjectRepository(LogTime)
    private readonly logTimeRepo: Repository<LogTime>,
  ) {}
  async create(process: Process): Promise<void> {
    const logTime = new LogTime();
    logTime.timestamp = new Date();
    logTime.process = process;
    await this.logTimeRepo.save(logTime);
  }
}
