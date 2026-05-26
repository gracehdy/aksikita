import { defineConfig } from 'prisma/config';

const databaseUrl: string = process.env.DATABASE_URL ?? 'file:./dev.db';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: databaseUrl,
  },
});
