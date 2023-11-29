import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorLugarComponent } from './buscar-por-lugar.component';

describe('BuscarPorLugarComponent', () => {
  let component: BuscarPorLugarComponent;
  let fixture: ComponentFixture<BuscarPorLugarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPorLugarComponent]
    });
    fixture = TestBed.createComponent(BuscarPorLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
