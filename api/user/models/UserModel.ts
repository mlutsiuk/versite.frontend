export type UserModel = {
  object: 'User',
  id: string,
  name: string,
  nickname: string,
  email: string,
  avatar?: string,
  email_verified_at?: Date

  // roles: RelationCollection<RoleModel> | null,
  // permissions: RelationCollection<PermissionModel> | null
}
