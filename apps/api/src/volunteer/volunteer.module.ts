import { Module } from '@nestjs/common';
import { VolunteerController } from './volunteer.controller';

@Module({
  controllers: [VolunteerController],
})
export class VolunteerModule {}
