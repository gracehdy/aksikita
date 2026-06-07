/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */


import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

// Types
import type { App } from 'vue'

// Plugins
import vuetify from './vuetify'

export function registerPlugins (app: App) {
  app.use(vuetify)
}
