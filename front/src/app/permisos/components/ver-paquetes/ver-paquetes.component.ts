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

  search:string = '';
  _paquetes:any[] = [];
  categoriaSelected:string = '';
  @Output('paqueteSelected') selectPaqueteEmitter = new EventEmitter<any>();

  //computed
  categorias:Set<any>;
  displayPaquetes:any[] = [];

  constructor(
    private service:PermisosService
  ) { }

  ngOnInit(): void {
  }

  @Input() set paquetes(paquetes:any[]) {
    this._paquetes = paquetes;
    this.calculateCategorias();
    this.calculateDisplayPaquetes();
  }
  setCategoriaSelected(categoriaSelected){
    this.categoriaSelected = categoriaSelected;
    this.calculateDisplayPaquetes();
  }
  setSearch(search){
    this.search = search;
    this.calculateDisplayPaquetes();
  }

  calculateCategorias() {
    const categorias = new Set();
    this._paquetes.forEach(
      paquete => {
        categorias.add(paquete.categoria)
      }
    );
    this.categorias = categorias;
  }

  trackById(index, item) {
    return item.id
  }

  calculateDisplayPaquetes() {
    if(this.categoriaSelected === '' && this.search === '') {
      this.displayPaquetes = this._paquetes;
      return;
    }
    let results = this._paquetes;
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
    this.displayPaquetes = results;
  }

  selectPaquete(selected) {
    this.selectPaqueteEmitter.emit(selected);
  }

}
