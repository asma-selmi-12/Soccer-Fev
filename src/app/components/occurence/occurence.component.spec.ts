import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceComponent } from './occurence.component';

describe('OccurenceComponent', () => {
  let component: OccurenceComponent;
  let fixture: ComponentFixture<OccurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
