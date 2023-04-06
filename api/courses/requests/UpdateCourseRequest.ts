import { Course } from '~/api/courses';

export type UpdateCourseRequest = Pick<Course, 'title' | 'description'>;
