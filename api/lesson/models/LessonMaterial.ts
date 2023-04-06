import { RelationItem } from '~/api';
import { Lesson } from '~/api/models';

export type LessonMaterial = {
  object: 'LessonMaterial';
  id: number;
  content: string;
  lesson_id: number;

  lesson?: RelationItem<Lesson>;
};
