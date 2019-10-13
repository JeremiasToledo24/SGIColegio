import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInscribirComponent } from './dialog-inscribir.component';

describe('DialogInscribirComponent', () => {
  let component: DialogInscribirComponent;
  let fixture: ComponentFixture<DialogInscribirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInscribirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInscribirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
