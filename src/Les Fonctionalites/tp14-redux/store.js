import { legacy_createStore as createStore } from "redux";
import rootReducer from './reducers'; //Assurez-vous d'avoir un fichier reducer.js

const store = createStore(rootReducer);

export default store;
