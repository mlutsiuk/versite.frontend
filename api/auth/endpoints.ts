import { AccessTokenResponse, Endpoint, PasswordLoginRequest, PasswordRegistrationRequest } from '~/api';

export const passwordLoginEndpoint: Endpoint<
  AccessTokenResponse,
  PasswordLoginRequest
> = {
  method: 'POST',
  url: 'v1/auth/login/password'
}

export const passwordRegistrationEndpoint: Endpoint<
  AccessTokenResponse,
  PasswordRegistrationRequest
> = {
  method: 'POST',
  url: 'v1/auth/register'
}
