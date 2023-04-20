import { RelationItem } from '~/api';
import { Assignment, Student } from '~/api/models';

export type AssignmentSubmission = {
  object: 'AssignmentSubmission';
  id: string;
  assignment_id: string;
  student_id: number;
  content: string;
  mark: number;
  is_checked: boolean;

  student?: RelationItem<Student>;
  assignment?: RelationItem<Assignment>;
};
