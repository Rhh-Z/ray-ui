import type { App } from 'vue';
import * as components from './components';

export default (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export * from './components';
