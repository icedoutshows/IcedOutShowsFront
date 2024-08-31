import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorValorComponent } from './buscar-por-valor.component';

describe('BuscarPorValorComponent', () => {
  let component: BuscarPorValorComponent;
  let fixture: ComponentFixture<BuscarPorValorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPorValorComponent]
    });
    fixture = TestBed.createComponent(BuscarPorValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
