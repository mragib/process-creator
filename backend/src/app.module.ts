import { Module } from '@nestjs/common';

import { ProcessModule } from './process/process.module';
import { LogTimeModule } from './log-time/log-time.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'process.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProcessModule,
    LogTimeModule,
  ],
})
export class AppModule {}
