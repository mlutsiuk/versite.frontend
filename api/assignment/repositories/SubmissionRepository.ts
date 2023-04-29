import { CreateSubmissionRequest } from '../requests';
import { Endpoint, ResourceSingle } from '~/api';
import { AssignmentSubmission } from '~/api/models';

const addMy = new Endpoint<
  ResourceSingle<AssignmentSubmission>,
  CreateSubmissionRequest,
  { assignmentId: string }
>({
  method: 'POST',
  url: ({ assignmentId }) => `v1/assignments/${assignmentId}/submissions/my`
});

const myFromAssignment = new Endpoint<
  ResourceSingle<AssignmentSubmission>,
  undefined,
  { assignmentId: string }
>({
  method: 'GET',
  url: ({ assignmentId }) => `v1/assignments/${assignmentId}/submissions/my`
});

export const submissions = {
  addMy,
  myFromAssignment
};
