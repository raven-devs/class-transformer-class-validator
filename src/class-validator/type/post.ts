import { Length } from 'class-validator';

export class Post {
  @Length(10, 20)
  title: string;

  text: string;

  rating: number;

  email: string;

  site: string;

  createDate: Date;
}
