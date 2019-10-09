import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentePrimariaComponent } from './docente-primaria.component';

describe('DocentePrimariaComponent', () => {
  let component: DocentePrimariaComponent;
  let fixture: ComponentFixture<DocentePrimariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentePrimariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentePrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
