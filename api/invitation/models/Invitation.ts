import { RelationItem } from '~/api';
import { Student, User } from '~/api/models';

export type Invitation = {
  object: 'Invitation';
  id: number;
  student_id: number;
  receiver_id: number | null;
  email: string | null;
  is_hidden: boolean;

  student?: RelationItem<Student> | null;
  receiver?: RelationItem<User> | null;
};
