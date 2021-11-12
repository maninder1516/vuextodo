import { createStore } from 'vuex';
import todos from './modules/todos'

// Create Store
const store = createStore({
    modules: {
        todos
    }
});

// Export the Store
export default store;
