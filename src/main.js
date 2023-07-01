import { createApp } from 'vue';
import App from './App.vue';
import ui from './ui';
import './styles/main';

const app = createApp(App);

ui.forEach(component => {
  app.component(component.name, component);
});

app.mount('#app');