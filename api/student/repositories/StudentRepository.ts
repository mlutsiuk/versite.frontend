import { Endpoint, ResponseMultiResource, ResponseSingleResource } from '~/api';
import { Student } from '~/api/models';
import { CreateStudentRequest, UpdateStudentRequest } from '../requests';

const all = new Endpoint<ResponseMultiResource<Student>>({
  method: 'GET',
  url: 'v1/students'
});

const allFromCourse = new Endpoint<
  ResponseMultiResource<Student>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}/students`
});

const find = new Endpoint<
  ResponseSingleResource<Student>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/students/${id}`
});

const create = new Endpoint<
  ResponseSingleResource<Student>,
  CreateStudentRequest
>({
  method: 'POST',
  url: 'v1/students'
});

const update = new Endpoint<
  ResponseSingleResource<Student>,
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
