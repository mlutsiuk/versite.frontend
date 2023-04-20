import { AssignmentSubmission } from '../models';

export type CreateSubmissionRequest = Pick<AssignmentSubmission, 'content'>;
