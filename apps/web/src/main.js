/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Composables
import helmet from 'helmet';
import cors from 'cors';
import { ValidationPipe } from '@nestjs/common';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
    components,
    directives,
});
// Plugins
import { registerPlugins } from './plugins';
// Components
// Styles
import 'unfonts.css';
import 'virtual:uno.css';
//import './styles/main.scss'
const app = createApp(App);
app.use(router);
app.use(vuetify);
registerPlugins(app);
app.mount('#app');

async function bootstrap() {
  const app =
    await NestFactory.create(AppModule);

  app.use(helmet());

  await app.listen(3000);
}

app.enableCors({
  origin: [
    'http://localhost:5173',
    'https://aksikita.com'
  ],
  credentials: true
});

app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
);