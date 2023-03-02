import {
  GetGoogleLoginUrlResponse,
  ResponseSingleResource,
  UserModel
} from '~/api';

export const authRepository = {
  getAuthenticatedUser() {
    return useHttpGet<ResponseSingleResource<UserModel>>('v1/auth/profile');
  },
  getGoogleLoginUrl() {
    return useHttpGet<GetGoogleLoginUrlResponse>('v1/auth/login/google/redirect');
  }
};
