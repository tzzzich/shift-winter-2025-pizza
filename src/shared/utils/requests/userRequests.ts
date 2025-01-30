import {
  UserResponse,
  LoginData,
  PhoneData,
  ProfileData,
  OtpResponse,
  TokenResponse,
} from "@types";
import { api } from "./instance";
import { AxiosResponse } from "axios";

const createOtp = async (
  data: PhoneData
): Promise<AxiosResponse<OtpResponse>> => await api.post("/auth/otp", data);

const login = async (
  data: LoginData
): Promise<AxiosResponse<TokenResponse>> => {
  try {
    const response: AxiosResponse<TokenResponse> = await api.post(
      "/users/signin",
      data
    );
    localStorage.setItem("token", response.data.token);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProfile = async (): Promise<AxiosResponse<UserResponse>> =>
  await api.get("/users/session");

const patchProfile = async (
  data: ProfileData
): Promise<AxiosResponse<UserResponse>> =>
  await api.patch("/users/profile", data);

export { createOtp, login, patchProfile, getProfile };
