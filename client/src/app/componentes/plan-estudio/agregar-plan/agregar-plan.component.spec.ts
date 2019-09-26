import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlanComponent } from './agregar-plan.component';

describe('AgregarPlanComponent', () => {
  let component: AgregarPlanComponent;
  let fixture: ComponentFixture<AgregarPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
