import { RelationItem } from '~/api';
import { AssignmentSubmission, Lesson } from '~/api/models';

export type Assignment = {
  object: 'Assignment';
  id: string;
  title: string;
  description?: string;
  max_mark?: number;
  deadline?: string;
  lesson_id: string;

  lesson?: RelationItem<Lesson>;
  my_submission?: RelationItem<AssignmentSubmission>;
};
