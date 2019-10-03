import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscribirComponent } from './inscribir.component';

describe('InscribirComponent', () => {
  let component: InscribirComponent;
  let fixture: ComponentFixture<InscribirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscribirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
