import { Endpoint, ResponseMultiResource, ResponseSingleResource } from '~/api';
import {
  CreateLessonRequest,
  Lesson,
  LessonMaterial,
  UpdateLessonMaterialRequest,
  UpdateLessonRequest
} from '~/api/lesson';

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
  url: ({ id }) => `v1/lessons/${id}`
});

const findMaterial = new Endpoint<
  ResponseSingleResource<LessonMaterial>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/lessons/${id}/material`
});

const create = new Endpoint<
  ResponseSingleResource<Lesson>,
  CreateLessonRequest
>({
  method: 'POST',
  url: 'v1/lessons'
});

const update = new Endpoint<
  ResponseSingleResource<Lesson>,
  UpdateLessonRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/lessons/${id}`
});

const updateMaterial = new Endpoint<
  ResponseSingleResource<LessonMaterial>,
  UpdateLessonMaterialRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/lessons/${id}/material`
});

const deleteLesson = new Endpoint<undefined, undefined, { id: string }>({
  method: 'DELETE',
  url: ({ id }) => `v1/lessons/${id}`
});

export const lessons = {
  all,
  allFromCourse,
  find,
  create,
  update,
  delete: deleteLesson,
  findMaterial,
  updateMaterial
};
