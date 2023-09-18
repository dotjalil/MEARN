import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingInputComponent } from './repeating-input.component';

describe('RepeatingInputComponent', () => {
  let component: RepeatingInputComponent;
  let fixture: ComponentFixture<RepeatingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepeatingInputComponent]
    });
    fixture = TestBed.createComponent(RepeatingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
