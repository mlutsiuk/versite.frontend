export type AccessTokenResponse = {
  token_type: string,
  expires_in: number,
  access_token: string
}

export * from './emailVerification';
export * from './googleLogin';
export * from './passwordLogin';
