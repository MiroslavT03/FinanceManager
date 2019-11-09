import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationGetComponent } from './operation-get.component';

describe('OperationGetComponent', () => {
  let component: OperationGetComponent;
  let fixture: ComponentFixture<OperationGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
