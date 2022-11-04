import { AccessTokenResponse, GetGoogleLoginUrlResponse, PasswordLoginRequest, ResponseSingleResource } from "~/api";
import { UserModel } from "~/api";

async function getAuthenticatedUser() {
  return await useHttpGet<ResponseSingleResource<UserModel>>('v1/auth/profile');
}

async function getGoogleLoginUrl() {
  return await useHttpGet<GetGoogleLoginUrlResponse>('v1/auth/login/google/redirect');
}

async function passwordLogin(body: PasswordLoginRequest) {
  return await useHttpPost<AccessTokenResponse>('v1/auth/login/password', {
    body
  });
}

export const authRepository = {
  getAuthenticatedUser,
  getGoogleLoginUrl,
  passwordLogin
}
