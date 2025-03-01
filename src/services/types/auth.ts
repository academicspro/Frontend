export interface ILoginResponse {
  suceess: boolean;
  accessToken: string;
  refreshToken: string;
  user: IUserObj;
  errors: string;
}

export interface IUserObj {
  name: string;
  email: string;
  role: string;
}

export interface IGetUserProfileResponse {
  suceess: boolean;
  user: IUserObj;
  errors: string;
}
