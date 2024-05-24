import { PartialType } from '@nestjs/mapped-types';
import { CreateLogTimeDto } from './create-log-time.dto';

export class UpdateLogTimeDto extends PartialType(CreateLogTimeDto) {}
