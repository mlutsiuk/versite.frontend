import { Endpoint, ResponseMultiResource, ResponseSingleResource } from '~/api';
import { CreateLessonRequest, Lesson, UpdateLessonRequest } from '~/api/lesson';

const all = new Endpoint<ResponseMultiResource<Lesson>>({
  method: 'GET',
  url: 'v1/lessons'
});

const allFromCourse = new Endpoint<
  ResponseMultiResource<Lesson>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}/lessons`
});

const find = new Endpoint<
  ResponseSingleResource<Lesson>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}`
});

const create = new Endpoint<
  ResponseSingleResource<Lesson>,
  CreateLessonRequest
>({
  method: 'POST',
  url: 'v1/courses'
});

const update = new Endpoint<
  ResponseSingleResource<Lesson>,
  UpdateLessonRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/courses/${id}`
});

const deleteLesson = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/courses/${id}`
});

export const lessons = {
  all,
  allFromCourse,
  find,
  create,
  update,
  delete: deleteLesson
};
