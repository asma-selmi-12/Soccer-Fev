import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelTeamsComponent } from './tabel-teams.component';

describe('TabelTeamsComponent', () => {
  let component: TabelTeamsComponent;
  let fixture: ComponentFixture<TabelTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
