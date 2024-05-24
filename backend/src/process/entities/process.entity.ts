import { LogTime } from 'src/log-time/entities/log-time.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  processId: string;

  @CreateDateColumn()
  creating_at: Date;

  @Column({ nullable: true })
  intervalId: string;

  @OneToMany(() => LogTime, (item) => item.process, {
    cascade: true,

    eager: true,
  })
  logtime: LogTime[];
}
