import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCobrosComponent } from './dialog-cobros.component';

describe('DialogCobrosComponent', () => {
  let component: DialogCobrosComponent;
  let fixture: ComponentFixture<DialogCobrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCobrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
