import { RelationCollection, RelationItem } from '~/api';
import { User } from '~/api/user';
import { Lesson } from '~/api/lesson';
import { Student } from '~/api/student';

export type Course = {
  object: 'Course';
  id: string;
  title: string;
  description: string;
  author_id: string;

  author?: RelationItem<User>;
  lessons?: RelationCollection<Lesson>;
  next_lesson?: RelationItem<Lesson>;
  students?: RelationCollection<Student>;
};
