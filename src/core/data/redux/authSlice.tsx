import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ILoginResponse, IUserObj } from "../../../services/types/auth";
import AppConfig from "../../../config/config";

interface IAuthSliceInitialState {
  isLoggedIn: boolean;
  userObj: IUserObj | null;
}

const initialState: IAuthSliceInitialState = {
  isLoggedIn: false,
  userObj: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUserObj: (state, action: PayloadAction<IUserObj | null>) => {
      state.userObj = action.payload;
    },
    loggedInHandler: (state, action: PayloadAction<ILoginResponse>) => {
      // update local storage
      localStorage.setItem(AppConfig.LOCAL_STORAGE_ACCESS_TOKEN_KEY, action.payload.accessToken);
      localStorage.setItem(AppConfig.LOCAL_STORAGE_REFRESH_TOKEN_KEY, action.payload.refreshToken);

      state.isLoggedIn = true;
      state.userObj = action.payload.user;
    },
  },
});

export const { setIsLoggedIn, setUserObj, loggedInHandler } = authSlice.actions;

export default authSlice.reducer;
