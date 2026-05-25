import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Establish the database connection immediately when the app bootstraps
  async onModuleInit() {
    await this.$connect();
  }

  // Ensure database sockets close gracefully during hot-reloads or container shutdowns
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
