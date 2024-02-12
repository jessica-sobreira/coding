import { combineReducers } from "@reduxjs/toolkit";
import usuarioSlice from "./modules/usuarioSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
    usuario: usuarioSlice,
});

export const persistedReducer = persistReducer({
    key: "usuario",
    storage: storage
}, rootReducer)