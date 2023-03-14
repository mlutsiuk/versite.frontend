import { CourseModel } from '~/api/courses';

export type UpdateCourseRequest = Pick<CourseModel, 'slug' | 'title' | 'description'>
