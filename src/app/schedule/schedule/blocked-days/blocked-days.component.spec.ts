import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedDaysComponent } from './blocked-days.component';

describe('BlockedDaysComponent', () => {
  let component: BlockedDaysComponent;
  let fixture: ComponentFixture<BlockedDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockedDaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockedDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
