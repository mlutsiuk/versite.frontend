import { Endpoint, ResourceSingle } from '~/api';
import { AssignmentSubmission } from '~/api/models';
import { CreateSubmissionRequest } from '../requests';

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
