import { RelationItem } from '~/api';
import { Student, User } from '~/api/models';

export type Invitation = {
  object: 'Invitation';
  id: string;
  student_id: string;
  receiver_id: string | null;
  email: string | null;
  is_hidden: boolean;

  student?: RelationItem<Student> | null;
  receiver?: RelationItem<User> | null;
};
