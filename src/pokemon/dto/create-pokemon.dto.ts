import { Type } from 'class-transformer';
import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsPositive()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(1, { message: 'NO must be greater than or equal to 1.' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Type(() => Number)
  readonly no: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString({ message: `The name must be a cool string` })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3)
  name: string;
}
