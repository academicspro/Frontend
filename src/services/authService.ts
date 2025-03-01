// import axios from "axios";

// const API_BASE_URL = "https://academicspro-production.up.railway.app/api/v1";

// export const login = async (email: string, password: string) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/sign-in`, { email, password });

//     if (response.data.token) {
//       localStorage.setItem("token", response.data.token);
//     }

//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error) && error.response) {
//       throw error.response.data;
//     } else {
//       // eslint-disable-next-line no-throw-literal
//       throw "Login failed";
//     }
//   }
// };

// export const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("role");
// };
// export const getCurrentUserRole = () => {
//   return localStorage.getItem("role");
// };

// export const getCurrentUser = () => {
//   return localStorage.getItem("token");
// };

import { AxiosResponse } from "axios";

import { ILoginResponse, IGetUserProfileResponse } from "./types/auth";
import BaseApi from "./BaseApi";

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
