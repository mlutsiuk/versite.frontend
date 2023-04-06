import { Course } from '~/api/courses';

export type CreateCourseRequest = Pick<Course, 'title' | 'description'>;
