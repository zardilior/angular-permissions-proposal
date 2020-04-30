import { IsString,IsNotEmpty } from 'class-validator';
export class Permiso {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  nombre_mostrable: string;
}
