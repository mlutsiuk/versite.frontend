import {
  AccessTokenResponse,
  Endpoint,
  GetGoogleLoginUrlResponse,
  PasswordLoginRequest,
  PasswordRegistrationRequest,
  ResponseSingleResource,
  UserModel
} from '~/api';

export const passwordLoginEndpoint = new Endpoint<
  AccessTokenResponse,
  PasswordLoginRequest
>({
  method: 'POST',
  url: 'v1/auth/login/password'
});

export const passwordRegistrationEndpoint = new Endpoint<
  AccessTokenResponse,
  PasswordRegistrationRequest
>({
  method: 'POST',
  url: 'v1/auth/register'
})

export const getAuthenticatedUserEndpoint = new Endpoint<
  ResponseSingleResource<UserModel>
>({
  method: 'GET',
  url: 'v1/auth/profile'
})

export const getGoogleLoginUrlEndpoint = new Endpoint<
  GetGoogleLoginUrlResponse
>({
  method: 'GET',
  url: 'v1/auth/login/google/redirect'
})
