import { Lesson } from '~/api/models';

export type CreateLessonRequest = Pick<Lesson, 'title' | 'course_id' | 'date'>;
