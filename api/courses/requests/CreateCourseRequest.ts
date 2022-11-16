import { CourseModel } from "~/api";

export type CreateCourseRequest = Pick<CourseModel, 'slug' | 'title' | 'description'>
