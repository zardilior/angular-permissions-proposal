import { 
  IsString,
  IsNotEmpty,
  IsEmpty,
} from 'class-validator';
export class Paquete {
  @IsEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;
}
