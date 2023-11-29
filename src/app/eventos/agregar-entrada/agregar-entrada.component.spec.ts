import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEntradaComponent } from './agregar-entrada.component';

describe('AgregarEntradaComponent', () => {
  let component: AgregarEntradaComponent;
  let fixture: ComponentFixture<AgregarEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEntradaComponent]
    });
    fixture = TestBed.createComponent(AgregarEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
