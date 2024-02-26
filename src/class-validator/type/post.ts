import { Contains, IsDate, IsEmail, IsFQDN, IsInt, IsString, Length, Max, Min } from 'class-validator';

export class Post {
  @Length(10, 20)
  title: string;

  @Contains('hello')
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsString()
  @IsEmail()
  email: any;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}
