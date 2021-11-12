//import { createApp } from 'vue';
import { createStore } from 'vuex';
import todos from './modules/todos'

// Create Store
const store = createStore({
    modules: {
        todos
    }
});

//const app = createApp({});
//app.use(store);

export default store;
