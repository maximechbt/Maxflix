export type TraktMedia = {
  title: string;
  year: number;
  ids: {
    trakt: string;
    tmdb: number;
    tvdb: number;
    slug: string;
  };
  watchers: number;
};

export type Media = {
  title: string;
  year: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  ids: {
    trakt: string;
    tmdb: number;
    slug: string;
  };
  trackObject: TraktMedia;
  type: string;
  genres: { id: number; name: string }[];
};
