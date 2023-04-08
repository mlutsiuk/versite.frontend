import { Lesson } from '~/api/models';

export type UpdateLessonRequest = Pick<Lesson, 'title' | 'date'>;
