import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPaquetesComponent } from './ver-paquetes.component';

describe('VerPaquetesComponent', () => {
  let component: VerPaquetesComponent;
  let fixture: ComponentFixture<VerPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
