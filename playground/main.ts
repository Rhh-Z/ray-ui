import { createApp } from 'vue';
import App from './src/App.vue';
import RayUI from '@ray-ui/components';

const app = createApp(App);
app.use(RayUI);
app.mount('#app');
