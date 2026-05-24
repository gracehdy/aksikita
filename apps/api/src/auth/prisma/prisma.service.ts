import { Injectable, OnModuleInit } from '@nestjs/common';
// Mundur 2 kali untuk mencapai folder src, lalu masuk ke generated
import { PrismaClient } from '../../generated/prisma'; 

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}