import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasvurComponent } from './basvur.component';

describe('BasvurComponent', () => {
  let component: BasvurComponent;
  let fixture: ComponentFixture<BasvurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasvurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasvurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
