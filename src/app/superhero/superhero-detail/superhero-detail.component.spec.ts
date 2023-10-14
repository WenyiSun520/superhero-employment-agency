import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroDetailComponent } from './superhero-detail.component';

describe('SuperheroDetailComponent', () => {
  let component: SuperheroDetailComponent;
  let fixture: ComponentFixture<SuperheroDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroDetailComponent]
    });
    fixture = TestBed.createComponent(SuperheroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
