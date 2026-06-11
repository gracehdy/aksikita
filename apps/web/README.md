# AksiKita Web

Vue 3 frontend for the AksiKita civic tech platform.

## Prerequisites

- Bun ≥ 1.0

## Setup

```bash
cd apps/web
bun install
```

## Development

```bash
bun run dev
```

The app will be available at http://localhost:5173.

## Building for Production

```bash
bun run build
```

This runs type checking and Vite build in parallel. Output is in `dist/`.

## Preview Production Build

```bash
bun run preview
```

## Type Checking

```bash
bun run type-check
```

## Project Structure

```
apps/web/
├── src/
│   ├── components/       # Reusable components (Navbar, mediagallery)
│   ├── views/            # Page components (home, login, buatLaporan, etc.)
│   ├── router/           # Vue Router configuration
│   ├── plugins/          # Vuetify and other plugin setup
│   ├── styles/           # SCSS and UnoCSS layers
│   ├── utils/            # Helper functions (date, status)
│   ├── data/             # Mock data (mockReports.ts)
│   ├── App.vue           # Root component
│   └── main.ts           # Entry point
├── index.html
├── uno.config.ts         # UnoCSS configuration (with Vuetify preset)
├── vite.config.mts       # Vite configuration
├── tsconfig.json         # TypeScript configuration (split into app/node)
└── package.json
```

## Technologies

| Tool         | Purpose                             |
| ------------ | ----------------------------------- |
| Vue 3        | UI framework                        |
| Vite         | Build tool and dev server           |
| Vuetify 4    | Material Design component library   |
| UnoCSS       | Utility-first CSS engine            |
| Vue Router 4 | Client-side routing                 |
| TypeScript   | Type safety                         |
| Shared Types | `@aksikita/types` workspace package |

## API Integration

The frontend expects the backend API at `http://localhost:3000`.

## Features Implemented

- User registration and login (JWT)
- Report creation with location and images
- Action coordination (create, view, join)
- Volunteer registration
- Commenting system
- Community page
- Volunteer achievements

## License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.
