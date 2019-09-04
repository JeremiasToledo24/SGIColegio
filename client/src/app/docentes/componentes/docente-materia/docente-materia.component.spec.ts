import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteMateriaComponent } from './docente-materia.component';

describe('DocenteMateriaComponent', () => {
  let component: DocenteMateriaComponent;
  let fixture: ComponentFixture<DocenteMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
