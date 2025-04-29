import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,        // Stocke le token reçu après le login
  user: null,         // Contiendra les infos comme firstName, lastName, email
  isLogged: false     // Un booléen utilisateur connecté ?
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Met à jour le token et change l’état de connexion
    setToken: (state, action) => {
      state.token = action.payload;
      state.isLogged = true;
    },
    // Met à jour les infos de l’utilisateur
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Réinitialise tout lors du logout
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isLogged = false;
    }
  }
});
  
export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;