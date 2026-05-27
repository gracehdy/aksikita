import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client/client';
import { PrismaBunSqlite } from 'prisma-adapter-bun-sqlite';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaBunSqlite({
      url: process.env.DATABASE_URL ?? 'file:./dev.db',
    });

    super({ adapter });
  }

  // Establish the database connection immediately when the app bootstraps
  async onModuleInit() {
    await this.$connect();
  }

  // Ensure database sockets close gracefully during hot-reloads or container shutdowns
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
