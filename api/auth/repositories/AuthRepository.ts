import {
  AccessTokenResponse,
  GetGoogleLoginUrlResponse,
  PasswordLoginRequest,
  ResponseSingleResource,
  UserModel
} from "~/api";

export const authRepository = {
  async getAuthenticatedUser() {
    return await useHttpGet<ResponseSingleResource<UserModel>>('v1/auth/profile');
  },
  async getGoogleLoginUrl() {
    return await useHttpGet<GetGoogleLoginUrlResponse>('v1/auth/login/google/redirect');
  },
  async passwordLogin(body: PasswordLoginRequest) {
    return await useHttpPost<AccessTokenResponse>('v1/auth/login/password', {
      body
    });
  }
}
