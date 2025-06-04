import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorComponent } from './scor.component';

describe('ScorComponent', () => {
  let component: ScorComponent;
  let fixture: ComponentFixture<ScorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
