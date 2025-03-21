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
  requestedAt?: string;
}

export interface IRequestFeaturesResponse extends IBaseResponse {}

export interface IGetAllFeaturesRequestListResponse extends IBaseResponse {
  featuresList: Array<IFeatureRequestObj>;
}

export interface IFeatureRequestObj {
  moduleName: string;
  status: number; // 0: not there, 1: Pending request, 2 for rejected
  id: string;
}

export interface IFeaturesRequestApproveResponse extends IBaseResponse {}
