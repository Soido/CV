export interface IPost {
  id: number;
  title: string;
  body: string;
  isFavorite: boolean;
  filter: {
    sort: string;
    query: string;
  };
}

export interface IFilms {
  id: number;
  title: string;
  isFavorite: boolean;
  onlyFavorite: boolean;
  ganre: string;
  author: string;
  year: string | number;
  source: string;
}
