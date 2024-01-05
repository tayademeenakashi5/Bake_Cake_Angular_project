import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsBarComponent } from './chips-bar.component';

describe('ChipsBarComponent', () => {
  let component: ChipsBarComponent;
  let fixture: ComponentFixture<ChipsBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsBarComponent]
    });
    fixture = TestBed.createComponent(ChipsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
