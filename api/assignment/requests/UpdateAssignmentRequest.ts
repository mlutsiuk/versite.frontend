import { Assignment } from '../models';

export type UpdateAssignmentRequest = Pick<
  Assignment,
  'title' | 'description' | 'max_mark' | 'deadline'
>;
