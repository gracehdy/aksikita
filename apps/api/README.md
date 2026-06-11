# AksiKita API

NestJS backend for the AksiKita civic tech platform.

## Prerequisites

- PostgreSQL ≥ 14
- Bun ≥ 1.0

## Environment Variables

Create `apps/api/.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/aksikita_db"
JWT_SECRET=your_super_secret_jwt_key
```

## Setup

```bash
cd apps/api
bun install
bunx prisma generate    # Generate Prisma Client
bunx prisma migrate dev # Run migrations
```

## Running the API

```bash
# Development
bun run start:dev

# Production
bun run build
bun run start:prod
```

> Note: `bun run build` automatically runs `prisma generate` if configured in `package.json` scripts. If not, run `bunx prisma generate` before building.

## Testing

```bash
# Unit tests
bun run test

# E2E tests
bun run test:e2e

# Coverage
bun run test:cov
```

## API Modules

| Module         | Description                                           |
| -------------- | ----------------------------------------------------- |
| `auth`         | JWT authentication (register, login, forgot password) |
| `report`       | Create, read, search reports with location and images |
| `action`       | Create and coordinate volunteer actions               |
| `volunteer`    | Volunteer registration and management                 |
| `comment`      | Comments on reports and actions                       |
| `achievements` | Gamification and recognition for volunteers           |
| `user`         | User profile management                               |

## Database Schema

See [`prisma/schema.prisma`](./prisma/schema.prisma). Migrations are in [`prisma/migrations/`](./prisma/migrations/).

## Project Structure

```
apps/api/
├── src/
│   ├── auth/           # Authentication module
│   ├── report/         # Report module
│   ├── action/         # Action module
│   ├── volunteer/      # Volunteer module
│   ├── comment/        # Comment module
│   ├── achievements/   # Achievements module
│   ├── user/           # User module
│   ├── prisma/         # Prisma service
│   └── common/         # Shared filters, guards
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── test/               # E2E tests
```

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
