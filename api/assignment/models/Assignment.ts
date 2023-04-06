import { RelationItem } from '~/api';
import { Lesson } from '~/api/models';

export type Assignment = {
  object: 'Assignment';
  id: number;
  title: string;
  description?: string;
  max_mark?: number;
  deadline?: number;
  lesson_id: number;

  lesson?: RelationItem<Lesson>;
  // TODO: Add assignment_submissions relation
};
