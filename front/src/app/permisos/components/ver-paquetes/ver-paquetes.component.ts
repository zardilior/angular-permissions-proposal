import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PermisosService } from '../../permisos.service';

@Component({
  selector: 'app-ver-paquetes',
  templateUrl: './ver-paquetes.component.html',
  styleUrls: ['./ver-paquetes.component.scss']
})
export class VerPaquetesComponent implements OnInit {

  @Input() paquetes:any[] = [];
  search:string = '';
  categoriaSelected:string = '';
  @Output('paqueteSelected') selectPaqueteEmitter = new EventEmitter<any>();

  constructor(
    private service:PermisosService
  ) { }

  ngOnInit(): void {
  }

  get categorias() {
    const categorias = new Set();
    this.paquetes.forEach(
      paquete => {
        categorias.add(paquete.categoria)
      }
    );
    return categorias;
  }

  trackById(index, item) {
    return item.id
  }

  get displayPaquetes() {
    if(this.categoriaSelected === '' && this.search === '') {
      return this.paquetes;
    }
    let results = this.paquetes;
    if(this.categoriaSelected) {
      results = results.filter(
        paquete => this.categoriaSelected === paquete.categoria
      )
    }
    if(this.search) {
      results = results.filter(
        paquete => paquete.nombre.indexOf(this.search) != -1
      )
    }
    return results;
  }

  selectPaquete(selected) {
    this.selectPaqueteEmitter.emit(selected);
  }

}
