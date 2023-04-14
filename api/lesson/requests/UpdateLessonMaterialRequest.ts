import { LessonMaterial } from '~/api/models';

export type UpdateLessonMaterialRequest = Pick<LessonMaterial, 'content'>;
