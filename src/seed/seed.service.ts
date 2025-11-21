import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(private readonly pokemonService: PokemonService) {}

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );
    const pokemonToInsert: CreatePokemonDto[] = [];

    await this.pokemonService.removeBD();
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      const createPokemonDto: CreatePokemonDto = {
        name,
        no,
      };
      pokemonToInsert.push(createPokemonDto);
    });

    await this.pokemonService.createPokemonsWithArray(pokemonToInsert);
    return 'Seed Execute';
  }
}
