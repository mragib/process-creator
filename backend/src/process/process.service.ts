import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Process } from './entities/process.entity';
import { Repository } from 'typeorm';
import { LogTimeService } from '../log-time/log-time.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProcessService {
  private readonly logger = new Logger(ProcessService.name);

  constructor(
    @InjectRepository(Process)
    private readonly processRepo: Repository<Process>,
    private logTimeService: LogTimeService,
  ) {}

  async create(): Promise<string> {
    const processId = uuidv4();
    const process = new Process();
    process.processId = processId;
    await this.processRepo.save(process);

    this.startLogging(process);
    return processId;
  }

  private async startLogging(process: Process) {
    const intervalId = setInterval(async () => {
      this.logger.log(`Logging time for process ${process.processId}`);
      await this.logTimeService.create(process);
    }, 5000);
    process.intervalId = String(intervalId);
    await this.processRepo.save(process);
    this.logger.log(
      `Started logging for process ${process.processId} with interval ID ${process.intervalId}`,
    );
  }

  async deleteProcess(processId: string): Promise<string> {
    const process = await this.processRepo.findOne({ where: { processId } });
    if (process) {
      this.logger.log(`Deleting process with id ${processId}`);
      clearInterval(Number(process.intervalId));
      await this.processRepo.remove(process);
      this.logger.log(`Deleted process with id ${processId}`);
      return `Process ${processId} has been removed`;
    }
    throw new NotFoundException(`Process with id ${processId} not found`);
  }

  findAll() {
    return this.processRepo.find();
  }

  async findOne(processId: string) {
    const process = await this.processRepo.findOne({
      where: { processId },
      relations: ['logtime'],
    });
    if (process) {
      return process.logtime;
    }
    throw new NotFoundException(`Process with id ${processId} not found`);
  }
}
