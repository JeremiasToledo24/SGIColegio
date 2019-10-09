import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosSecundariaComponent } from './periodos-secundaria.component';

describe('PeriodosSecundariaComponent', () => {
  let component: PeriodosSecundariaComponent;
  let fixture: ComponentFixture<PeriodosSecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodosSecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodosSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
