import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Makes the service accessible everywhere without re-importing the module
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Must export it to allow other modules to inject it
})
export class PrismaModule {}
