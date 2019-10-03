import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPeriodosLectivosComponent } from './lista-periodos-lectivos.component';

describe('ListaPeriodosLectivosComponent', () => {
  let component: ListaPeriodosLectivosComponent;
  let fixture: ComponentFixture<ListaPeriodosLectivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPeriodosLectivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPeriodosLectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
