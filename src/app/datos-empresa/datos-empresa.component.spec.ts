import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEmpresaComponent } from './datos-empresa.component';

describe('DatosEmpresaComponent', () => {
  let component: DatosEmpresaComponent;
  let fixture: ComponentFixture<DatosEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosEmpresaComponent]
    });
    fixture = TestBed.createComponent(DatosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
