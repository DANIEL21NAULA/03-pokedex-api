export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonR[];
}

export interface PokemonR {
  name: string;
  url: string;
}
