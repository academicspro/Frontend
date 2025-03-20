export interface IBaseResponse {
  suceess: boolean;
  errors?: string;
}

export interface IGetAllFeaturesResponse extends IBaseResponse {
  featuresList: Array<IFeatureObj>;
}

export interface IFeatureObj {
  moduleName: string;
  permission: number;
  status: number; // 0: not there, 1: Pending request, 2 for rejected
}

export interface IRequestFeaturesResponse extends IBaseResponse { }

