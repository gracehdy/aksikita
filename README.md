# Fullstack Monorepo

A Turborepo monorepo with NestJS API and Vue.js frontend.

## Quick Start

```bash
# Install dependencies
bun install

# Run all apps in development
bun run dev

# Build all apps
bun run build
```

## Project Structure
```
├── apps/
│ ├── api/ # NestJS backend API
│ └── web/ # Vue.js frontend application
├── packages/types/ # Shared TypeScript types/interfaces
├── turbo.json # Turborepo configuration
└── package.json # Root package.json
```
