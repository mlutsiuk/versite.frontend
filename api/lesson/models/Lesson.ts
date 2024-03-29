import { RelationCollection, RelationItem } from '~/api';
import { Assignment, Course, LessonMaterial } from '~/api/models';

export type Lesson = {
  object: 'Lesson';
  id: number;
  title: string;
  date: string;
  course_id: string;

  assignments?: RelationCollection<Assignment>;
  course?: RelationItem<Course>;
  material?: RelationItem<LessonMaterial>;
};
