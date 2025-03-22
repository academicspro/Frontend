
import { AxiosResponse } from "axios";

import { ILoginResponse, IGetUserProfileResponse } from "./types/auth";
import BaseApi from "./BaseApi";
import AppConfig from "../config/config";

export const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<ILoginResponse>> => {
  const response = await BaseApi.postRequest(`/sign-in`, {
    email,
    password,
  });

  return response;
};

export const getUserProfile = async (): Promise<
  AxiosResponse<IGetUserProfileResponse>
> => {
  const response = await BaseApi.getRequest(`/get-profile`);

  return response;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userId");
  //changed
  localStorage.removeItem(AppConfig.LOCAL_STORAGE_ACCESS_TOKEN_KEY); // Clear access token
  localStorage.removeItem(AppConfig.LOCAL_STORAGE_REFRESH_TOKEN_KEY); // Clear refresh token
  window.location.reload() //to automatically reload
  
};

export const getCurrentUserRole = () => {
  return localStorage.getItem("role");
};

export const getCurrentUser = () => {
  return localStorage.getItem("token");
};

export const getCurrentUserId = () => {
  return localStorage.getItem("userId");
};
