import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { ProcessService } from './process.service';

@Controller()
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

  @Post('create-process')
  create() {
    return this.processService.create();
  }

  @Get('get-all')
  findAll() {
    return this.processService.findAll();
  }

  @Get('get-single/:id')
  findOne(@Param('id') id: string) {
    return this.processService.findOne(id);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.processService.deleteProcess(id);
  }
}
