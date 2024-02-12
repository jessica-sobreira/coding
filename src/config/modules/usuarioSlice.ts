import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Usuario } from "../../model/usuario.model";

const initialState: Usuario | null = null;

const usuarioSlice = createSlice({
    name: "usuario",
    initialState: initialState as Usuario | null,
    reducers: {
        login: (state, action: PayloadAction<Usuario>) => {
            return action.payload;
        }
    }

});

export default usuarioSlice.reducer;

export const { login } = usuarioSlice.actions;