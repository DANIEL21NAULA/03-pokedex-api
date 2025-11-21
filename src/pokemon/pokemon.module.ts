import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    //* con esta linea de codigo se crea la tabla en la BD
    MongooseModule.forFeature([
      {
        name: Pokemon.name, //* este nombre es extend de Documen de la clase de Pokemon(entities)
        schema: PokemonSchema,
      },
    ]),
  ],
  exports: [PokemonService],
})
export class PokemonModule {}
