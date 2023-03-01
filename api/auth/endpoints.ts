import { AccessTokenResponse, Endpoint, PasswordLoginRequest } from '~/api';

export const passwordLoginEndpoint: Endpoint<
  AccessTokenResponse,
  PasswordLoginRequest
> = {
  method: 'POST',
  url: 'v1/auth/login/password'
}
