import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelMatchesComponent } from './tabel-matches.component';

describe('TabelMatchesComponent', () => {
  let component: TabelMatchesComponent;
  let fixture: ComponentFixture<TabelMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
