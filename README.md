# AksiKita

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bun](https://img.shields.io/badge/Bun-≥1.0-black)
![NestJS](https://img.shields.io/badge/NestJS-11-red)
![Vue.js](https://img.shields.io/badge/Vue-3-green)

**AksiKita** is a location-based civic tech platform that enables communities to report local issues and transform them into **real action** coordinated by community volunteers.

## Quick Start

```bash
git clone https://github.com/username/aksikita.git
cd aksikita
bun install
```

### Environment Setup

```bash
cp apps/api/.env.example apps/api/.env
```

> Edit apps/api/.env with your database credentials (see apps/api/README.md)

### Database & Run

```bash
cd apps/api
bunx prisma migrate dev
cd ../..
bun run dev
```

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

## Monorepo Scripts (run from root)

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `bun run dev`   | Start both backend and frontend in dev mode |
| `bun run build` | Build all apps for production               |
| `bun run lint`  | Lint entire codebase                        |

## Documentation

- [Backend API](./apps/api/README.md)
- [Frontend Web](./apps/web/README.md)

## Tech Stack

| Area     | Technologies                    |
| -------- | ------------------------------- |
| Runtime  | [Bun](https://bun.sh)           |
| Backend  | NestJS, Prisma, PostgreSQL, JWT |
| Frontend | Vue 3, Vite, Vuetify, UnoCSS    |
| Monorepo | Turborepo                       |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
