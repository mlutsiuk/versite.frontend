import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import { Assignment } from '~/api/models';
import { CreateAssignmentRequest, UpdateAssignmentRequest } from '../requests';

const all = new Endpoint<ResourceArray<Assignment>>({
  method: 'GET',
  url: 'v1/assignments'
});

const allFromLesson = new Endpoint<
  ResourceArray<Assignment>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/lessons/${id}/assignments`
});

const find = new Endpoint<
  ResourceSingle<Assignment>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/assignments/${id}`
});

const create = new Endpoint<
  ResourceSingle<Assignment>,
  CreateAssignmentRequest
>({
  method: 'POST',
  url: 'v1/assignments'
});

const update = new Endpoint<
  ResourceSingle<Assignment>,
  UpdateAssignmentRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/assignments/${id}`
});

const deleteAssignment = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/assignments/${id}`
});

export const assignments = {
  all,
  allFromLesson,
  find,
  create,
  update,
  delete: deleteAssignment
};
