import { RelationCollection } from '~/api';
import { Course, Invitation } from '~/api/models';

export type User = {
  object: 'User';
  id: number;
  name: string;
  nickname: string;
  email: string;
  avatar?: string;
  email_verified_at?: Date;

  authored_courses?: RelationCollection<Course> | null;
  invitations?: RelationCollection<Invitation> | null;
  // roles: RelationCollection<RoleModel> | null,
  // permissions: RelationCollection<PermissionModel> | null
};
