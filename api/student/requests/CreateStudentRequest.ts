import { Student } from '~/api/models';

export type CreateStudentRequest = Pick<Student, 'name' | 'course_id'>;
