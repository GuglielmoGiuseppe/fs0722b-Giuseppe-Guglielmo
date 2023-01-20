export interface Movies {
  users: {
  };
  favorites: {
    movieId: number;
    userId: number;
    id: number;
  };
  genres:{
    id: number;
    name: string;
  }
  movies_popular: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: Array<number>;
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}
