import { Student } from '~/api/models';

export type UpdateStudentRequest = Pick<Student, 'name'>;
