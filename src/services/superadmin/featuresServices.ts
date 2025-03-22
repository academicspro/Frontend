import { AxiosResponse } from "axios";

import {
  IGetAllFeaturesRequestListResponse,
  IFeaturesRequestApproveResponse,
} from "../types/features";
import BaseApi from "../BaseApi";

// Get All Features Request List
export const getAllFeaturesRequestList = async (): Promise<
  AxiosResponse<IGetAllFeaturesRequestListResponse>
> => {
  const response = await BaseApi.getRequest(
    `/administrator/features/get-all-requests`
  );

  return response;
};

// Request Feature Approve
export const featureRequestApprove = async (
  id: string
): Promise<AxiosResponse<IFeaturesRequestApproveResponse>> => {
  const response = await BaseApi.putRequest(
    `/administrator/features/request/complete/${id}`
  );

  return response;
};

// Request Feature Reject
export const featureRequestReject = async (
  id: string
): Promise<AxiosResponse<IFeaturesRequestApproveResponse>> => {
  const response = await BaseApi.putRequest(
    `/administrator/features/request/cancel/${id}`
  );

  return response;
};
