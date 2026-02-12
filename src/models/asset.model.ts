import { Signup } from '../app/container/signup/signup';

export interface Asset {
  id: number;
  title: string;
  description: string;
  mac: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AssetPayload {
  title: string;
  description: string;
  mac: string;
  link: string;
}

export interface GetAssetsResponse {
  assets: Asset[];
  count: number;
}

export interface AssetResponse {
  asset: Asset;
  message?: string;
}

export interface DeleteAssetResponse {
  message: string;
}

export interface UserPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface SignupResponse {
  message: string;
  user: UserPayload;
}

export interface LoginResponse {
  message: string;
  token: string;
}
