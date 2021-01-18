import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyegirisComponent } from './uyegiris.component';

describe('UyegirisComponent', () => {
  let component: UyegirisComponent;
  let fixture: ComponentFixture<UyegirisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UyegirisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UyegirisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
