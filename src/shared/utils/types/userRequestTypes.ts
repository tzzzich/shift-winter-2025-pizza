import { ProfileName, PhoneData, StatusResponse } from "./common";

interface ProfileFields extends ProfileName {
  email: string;
  city: string;
}

interface LoginData extends PhoneData {
  code: number;
}

interface ProfileData extends PhoneData {
  profile: ProfileFields;
}

interface UserData extends ProfileFields, PhoneData {}

interface UserResponse extends StatusResponse {
  user: UserData;
}

interface TokenResponse extends UserResponse {
  token: string;
}

interface OtpResponse extends StatusResponse {
  retryDelay: number;
}

export type {
  ProfileFields,
  LoginData,
  ProfileData,
  UserData,
  UserResponse,
  TokenResponse,
  OtpResponse,
};
