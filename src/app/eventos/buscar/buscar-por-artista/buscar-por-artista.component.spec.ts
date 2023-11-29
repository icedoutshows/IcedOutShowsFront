import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorArtistaComponent } from './buscar-por-artista.component';

describe('BuscarPorArtistaComponent', () => {
  let component: BuscarPorArtistaComponent;
  let fixture: ComponentFixture<BuscarPorArtistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPorArtistaComponent]
    });
    fixture = TestBed.createComponent(BuscarPorArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
