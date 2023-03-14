import { CourseModel } from '~/api/courses';

export type CreateCourseRequest = Pick<CourseModel, 'slug' | 'title' | 'description'>
