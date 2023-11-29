import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosRecomendadosComponent } from './eventos-recomendados.component';

describe('EventosRecomendadosComponent', () => {
  let component: EventosRecomendadosComponent;
  let fixture: ComponentFixture<EventosRecomendadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosRecomendadosComponent]
    });
    fixture = TestBed.createComponent(EventosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
