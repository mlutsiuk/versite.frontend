export type UserModel = {
  object: 'User',
  id: string,
  name: string,
  nickname?: string,
  email: string,
  avatar?: string,
  email_verified_at?: Date,
  is_registration_completed: boolean,

  // roles: object[],
  // permissions: object[]
}
