import { Endpoint, ResourceSingle } from '~/api';
import {
  AccessTokenResponse,
  GetGoogleLoginUrlResponse,
  PasswordLoginRequest,
  PasswordRegistrationRequest
} from '~/api/auth';
import { User } from '~/api/user';

const passwordLogin = new Endpoint<AccessTokenResponse, PasswordLoginRequest>({
  method: 'POST',
  url: 'v1/auth/login/password'
});
const passwordRegistration = new Endpoint<
  AccessTokenResponse,
  PasswordRegistrationRequest
>({
  method: 'POST',
  url: 'v1/auth/register'
});
const getAuthenticatedUser = new Endpoint<ResourceSingle<User>>({
  method: 'GET',
  url: 'v1/auth/profile'
});

const getGoogleLoginUrl = new Endpoint<GetGoogleLoginUrlResponse>({
  method: 'GET',
  url: 'v1/auth/login/google/redirect'
});

export const auth = {
  passwordLogin,
  passwordRegistration,
  getAuthenticatedUser,
  getGoogleLoginUrl
};
