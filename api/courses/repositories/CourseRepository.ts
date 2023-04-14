import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import {
  Course,
  CreateCourseRequest,
  UpdateCourseRequest
} from '~/api/courses';

const all = new Endpoint<ResourceArray<Course>>({
  method: 'GET',
  url: 'v1/courses'
});

const authored = new Endpoint<ResourceArray<Course>>({
  method: 'GET',
  url: 'v1/courses/authored'
});

const find = new Endpoint<ResourceSingle<Course>, undefined, { id: string }>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}`
});

const create = new Endpoint<ResourceSingle<Course>, CreateCourseRequest>({
  method: 'POST',
  url: 'v1/courses'
});

const update = new Endpoint<
  ResourceSingle<Course>,
  UpdateCourseRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/courses/${id}`
});

const deleteCourse = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/courses/${id}`
});

export const courses = {
  all,
  authored,
  find,
  create,
  update,
  delete: deleteCourse
};
