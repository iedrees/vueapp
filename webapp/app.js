window._ = require('lodash');
 
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
 
import Vue from 'vue'
import router from './router';

// auto register components
const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 

// init
const app = new Vue({
    el: '#webapp',
    router,
});
