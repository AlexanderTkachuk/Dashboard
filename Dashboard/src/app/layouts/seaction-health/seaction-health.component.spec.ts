import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeactionHealthComponent } from './seaction-health.component';

describe('SeactionHealthComponent', () => {
  let component: SeactionHealthComponent;
  let fixture: ComponentFixture<SeactionHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeactionHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeactionHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
