import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILoginResponse, IUserObj, IUserPermission } from "../services/types/auth";
import AppConfig from "../config/config";

interface IAuthSliceInitialState {
  isLoggedIn: boolean;
  triggerPostLogin: boolean;
  userObj: IUserObj | null;
  userPermissions: IUserPermission | null;
}

const initialState: IAuthSliceInitialState = {
  isLoggedIn: false,
  triggerPostLogin: false,
  userObj: null,
  userPermissions: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setTriggerPostLogin: (state, action: PayloadAction<boolean>) => {
      state.triggerPostLogin = action.payload;
    },
    setUserObj: (state, action: PayloadAction<IUserObj | null>) => {
      state.userObj = action.payload;
    },
    setUserPermissions: (state, action: PayloadAction<IUserPermission | null>) => {
      state.userPermissions = action.payload;
    },
    loggedInHandler: (state, action: PayloadAction<ILoginResponse>) => {
      // update local storage
      localStorage.setItem(AppConfig.LOCAL_STORAGE_ACCESS_TOKEN_KEY, action.payload.accessToken);
      localStorage.setItem(AppConfig.LOCAL_STORAGE_REFRESH_TOKEN_KEY, action.payload.refreshToken);

      state.isLoggedIn = true;
      state.userObj = action.payload.user;
      state.userPermissions = action.payload.permissions;
    },
  },
});

export const { setIsLoggedIn, setTriggerPostLogin, setUserObj, setUserPermissions, loggedInHandler } = authSlice.actions;

export default authSlice.reducer;
