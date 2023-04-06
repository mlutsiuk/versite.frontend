import { RelationItem } from '~/api';
import { Lesson } from '~/api/models';

export type AssignmentSubmission = {
  object: 'AssignmentSubmission';
  id: number;
  content: string;
  lesson_id: number;

  lesson?: RelationItem<Lesson>;
};
