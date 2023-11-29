import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPorRecintoComponent } from './buscar-por-recinto.component';

describe('BuscarPorRecintoComponent', () => {
  let component: BuscarPorRecintoComponent;
  let fixture: ComponentFixture<BuscarPorRecintoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarPorRecintoComponent]
    });
    fixture = TestBed.createComponent(BuscarPorRecintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
