import { Endpoint, ResourceArray, ResourceSingle } from '~/api';
import {
  CreateLessonRequest,
  Lesson,
  LessonMaterial,
  UpdateLessonMaterialRequest,
  UpdateLessonRequest
} from '~/api/lesson';

const all = new Endpoint<ResourceArray<Lesson>>({
  method: 'GET',
  url: 'v1/lessons'
});

const calendar = new Endpoint<ResourceArray<Lesson>>({
  method: 'GET',
  url: 'v1/lessons/calendar'
});

const allFromCourse = new Endpoint<
  ResourceArray<Lesson>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/courses/${id}/lessons`
});

const find = new Endpoint<ResourceSingle<Lesson>, undefined, { id: string }>({
  method: 'GET',
  url: ({ id }) => `v1/lessons/${id}`
});

const findMaterial = new Endpoint<
  ResourceSingle<LessonMaterial>,
  undefined,
  { id: string }
>({
  method: 'GET',
  url: ({ id }) => `v1/lessons/${id}/material`
});

const create = new Endpoint<ResourceSingle<Lesson>, CreateLessonRequest>({
  method: 'POST',
  url: 'v1/lessons'
});

const update = new Endpoint<
  ResourceSingle<Lesson>,
  UpdateLessonRequest,
  { id: string }
>({
  method: 'PATCH',
  url: ({ id }) => `v1/lessons/${id}`
});

const updateMaterial = new Endpoint<
  ResourceSingle<LessonMaterial>,
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
  calendar,
  allFromCourse,
  find,
  create,
  update,
  delete: deleteLesson,
  findMaterial,
  updateMaterial
};
