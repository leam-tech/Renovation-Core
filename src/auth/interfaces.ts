import { SessionStatusInfo } from "../utils/request";

export interface LoginParams {
  email: string;
  password: string;
}

export interface PinLoginParams {
  user: string;
  pin: string;
}

export interface SendOTPParams {
  mobile: string;
  newOTP?: boolean;
  hash?: string;
}

export interface SendOTPResponse {
  status: "success";
  mobile: string;
}

export interface VerifyOTPParams {
  mobile: string;
  OTP: string;
  loginToUser: boolean;
}

export interface VerifyOTPResponse extends Partial<SessionStatusInfo> {
  status:
    | "no_pin_for_mobile"
    | "no_linked_user"
    | "invalid_pin"
    | "verified"
    | "user_not_found";
  mobile: string;
}
