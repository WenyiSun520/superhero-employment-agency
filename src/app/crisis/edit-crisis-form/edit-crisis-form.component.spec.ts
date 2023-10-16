import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrisisFormComponent } from './edit-crisis-form.component';

describe('EditCrisisFormComponent', () => {
  let component: EditCrisisFormComponent;
  let fixture: ComponentFixture<EditCrisisFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCrisisFormComponent]
    });
    fixture = TestBed.createComponent(EditCrisisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
