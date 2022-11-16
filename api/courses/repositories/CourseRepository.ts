import {
  CreateCourseRequest,
  CreateCourseResponse,
  FindCourseResponse,
  UpdateCourseRequest,
  UpdateCourseResponse
} from "~/api";

export const courseRepository = {
  async find(id: string) {
    return await useHttpGet<FindCourseResponse>(`v1/courses/${id}`);
  },
  async create(body: CreateCourseRequest) {
    return await useHttpPost<CreateCourseResponse>('v1/courses', {
      body
    });
  },
  async update(id: string, body: UpdateCourseRequest) {
    return await useHttpPatch<UpdateCourseResponse>(`v1/courses/${id}`, {
      body
    });
  },
  async delete(id: string) {
    return await useHttpDelete(`v1/courses/${id}`);
  }
}
