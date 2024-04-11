import { createStore, combineReducers } from "redux";
import warehouseReducer from "../redux/Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { configureStore } from "@reduxjs/toolkit"

const persistConfig = {
  key: "root",
  storage,
};

const rootreducer = combineReducers({
  addinfo: warehouseReducer,
});

const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore(
  {reducer:persistedReducer},
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);






// import { combineReducers } from "redux";

// import warehouseReducer from "../redux/Reducer";
// import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { persistStore, persistReducer } from "redux-persist";

// const persistConfig ={
//   key:"root",
//   vershion:1,
//   storage
// }


// const rootreducer = combineReducers({
//   addinfo: warehouseReducer,
// });

// const persitReducered = persistReducer (persistConfig,rootreducer)

// export const store = configureStore({ reducer: persitReducered });







// import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { configureStore } from "@reduxjs/toolkit";
// import warehouseReducer from "../redux/Reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   addinfo: warehouseReducer,
 
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore(
//  { reducer:persistedReducer}
  
// );

// export const persistor = persistStore(store);
