import { RelationItem } from '~/api';
import { Assignment, Student } from '~/api/models';

export type AssignmentSubmission = {
  object: 'AssignmentSubmission';
  id: string;
  assignment_id: string;
  student_id: string;
  content: string;
  mark: number;
  is_checked: boolean;

  created_at: string;
  updated_at: string;

  student?: RelationItem<Student>;
  assignment?: RelationItem<Assignment>;
};
