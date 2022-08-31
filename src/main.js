// ES Module 导入
import { sum } from './js/math';
// Common JS 导入
const { priceFormat } = require('./js/format');
import './js/element';
import { createApp } from 'vue';
import App from './vue/App.vue';

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount('#app');
