import { RelationItem } from '~/api';
import { Assignment, Course, LessonMaterial } from '~/api/models';

export type Lesson = {
  object: 'Lesson';
  id: number;
  title: string;
  date: number;
  course_id: number;

  assignments?: RelationItem<Assignment>[];
  course?: RelationItem<Course>;
  material?: RelationItem<LessonMaterial>;
};
