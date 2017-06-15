import './init.json'
import Vue from 'vue'
import Filters from './filters/Filters.vue'

Vue.config.devtools = true;
Vue.config.debug = true;

new Vue({
    el: '#root',
    render: h=>h(Filters)
});