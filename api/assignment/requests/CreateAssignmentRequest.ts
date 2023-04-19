import { Assignment } from '../models';

export type CreateAssignmentRequest = Pick<
  Assignment,
  'title' | 'description' | 'deadline' | 'lesson_id'
>;
