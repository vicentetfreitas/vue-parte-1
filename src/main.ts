import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

  import VueResource from 'vue-resource';

Vue.use(VueResource);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
