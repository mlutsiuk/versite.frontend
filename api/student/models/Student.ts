import { RelationItem } from '~/api';
import { Course, Invitation, User } from '~/api/models';

export type Student = {
  object: 'Student';
  id: string;
  name: string | null;
  course_id: string;
  user_id: number | null;

  // TODO: Add assignments_submissions relations
  invitation?: RelationItem<Invitation>;
  course?: RelationItem<Course>;
  user?: RelationItem<User>;
};
