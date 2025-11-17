import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  // id: string // mongo da un codigo unico a nivel mundial
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

//! esta linea de codigo le dice cual es el esquema quese va utilizar con que columnas y reglas
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
