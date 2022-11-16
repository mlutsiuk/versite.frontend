import { CreateCourseRequest, CreateCourseResponse } from "~/api";
import { UpdateCourseRequest } from "~/api/courses/requests/UpdateCourseRequest";

export const courseRepository = {
  async create(body: CreateCourseRequest) {
    return await useHttpPost<CreateCourseResponse>('v1/courses', {
      body
    });
  },
  async update(id: string, body: UpdateCourseRequest) {
    return await useHttpPatch<CreateCourseResponse>(`v1/courses/${id}`, {
      body
    });
  }
}
