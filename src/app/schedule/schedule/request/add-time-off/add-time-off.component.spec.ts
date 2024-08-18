import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeOffComponent } from './add-time-off.component';

describe('AddTimeOffComponent', () => {
  let component: AddTimeOffComponent;
  let fixture: ComponentFixture<AddTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTimeOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
