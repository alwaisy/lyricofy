interface IGenres {
  id: number;
  title: string;
  value: string;
}

type TGenres = IGenres[];

export const genres: TGenres = [
  { id: 0, title: 'Pop', value: 'POP' },
  { id: 1, title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { id: 2, title: 'Dance', value: 'DANCE' },
  { id: 3, title: 'Electronic', value: 'ELECTRONIC' },
  { id: 4, title: 'Soul', value: 'SOUL_RNB' },
  { id: 5, title: 'Alternative', value: 'ALTERNATIVE' },
  { id: 6, title: 'Rock', value: 'ROCK' },
  { id: 7, title: 'Latin', value: 'LATIN' },
  { id: 8, title: 'Film', value: 'FILM_TV' },
  { id: 9, title: 'Country', value: 'COUNTRY' },
  { id: 10, title: 'Worldwide', value: 'WORLDWIDE' },
  { id: 11, title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { id: 12, title: 'House', value: 'HOUSE' },
  { id: 13, title: 'K-Pop', value: 'K_POP' }
];
