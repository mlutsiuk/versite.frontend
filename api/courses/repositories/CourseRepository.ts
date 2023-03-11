import {
  AllCoursesResponse,
  CreateCourseRequest,
  CreateCourseResponse,
  Endpoint,
  FindCourseResponse,
  UpdateCourseRequest,
  UpdateCourseResponse
} from '~/api';

const all = new Endpoint<
  AllCoursesResponse
>({
  method: 'GET',
  url: 'v1/courses'
});

const find = new Endpoint<
  FindCourseResponse,
  undefined,
  { id: number }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}`
});

const create = new Endpoint<
  CreateCourseResponse,
  CreateCourseRequest
>({
  method: 'POST',
  url: 'v1/courses'
});

const update = new Endpoint<
  UpdateCourseResponse,
  UpdateCourseRequest,
  { id: number }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/courses/${id}`
});

const deleteCourse = new Endpoint<
  undefined,
  undefined,
  { id: number }
>({
  method: 'DELETE',
  url: ({ id }) => `v1/courses/${id}`
});

export const courses = {
  all,
  find,
  create,
  update,
  delete: deleteCourse
};
