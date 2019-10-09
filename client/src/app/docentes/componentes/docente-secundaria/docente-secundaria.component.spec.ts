import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteSecundariaComponent } from './docente-secundaria.component';

describe('DocenteSecundariaComponent', () => {
  let component: DocenteSecundariaComponent;
  let fixture: ComponentFixture<DocenteSecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteSecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
