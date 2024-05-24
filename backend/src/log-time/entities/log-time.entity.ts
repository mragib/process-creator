import { Process } from 'src/process/entities/process.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LogTime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: Date;

  @ManyToOne(() => Process, (item) => item.logtime, { onDelete: 'CASCADE' })
  process: Process;
}
