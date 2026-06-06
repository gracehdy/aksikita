/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Composables
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
