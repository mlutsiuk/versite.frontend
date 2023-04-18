import { Assignment } from '../models';

export type CreateAssignmentRequest = Pick<
  Assignment,
  'title' | 'description' | 'max_mark' | 'deadline' | 'lesson_id'
>;
