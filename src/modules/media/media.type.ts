export type Media = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  media_type: string;
  genres: { id: number; name: string }[];
  popularity: number;
  vote_average?: number;
};
