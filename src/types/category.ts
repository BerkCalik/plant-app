import {IMeta} from '.';

export interface ICategoryListResponse extends IMeta {
  data: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: {url: string};
}
