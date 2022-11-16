import { CourseModel } from "~/api";

export type UpdateCourseRequest = Pick<CourseModel, 'slug' | 'title' | 'description'>
