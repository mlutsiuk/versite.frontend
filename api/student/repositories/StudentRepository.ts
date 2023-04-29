import { CreateStudentRequest, UpdateStudentRequest } from '../requests';
import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import { Student } from '~/api/models';

const all = new Endpoint<ResourceArray<Student>>({
  method: 'GET',
  url: 'v1/students'
});

const allFromCourse = new Endpoint<
  ResourceArray<Student>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}/students`
});

const find = new Endpoint<ResourceSingle<Student>, undefined, { id: string }>({
  method: 'GET',
  url: ({ id }) => `v1/students/${id}`
});

const create = new Endpoint<ResourceSingle<Student>, CreateStudentRequest>({
  method: 'POST',
  url: 'v1/students'
});

const update = new Endpoint<
  ResourceSingle<Student>,
  UpdateStudentRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/students/${id}`
});

const deleteLesson = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/students/${id}`
});

export const students = {
  all,
  allFromCourse,
  find,
  create,
  update,
  delete: deleteLesson
};
