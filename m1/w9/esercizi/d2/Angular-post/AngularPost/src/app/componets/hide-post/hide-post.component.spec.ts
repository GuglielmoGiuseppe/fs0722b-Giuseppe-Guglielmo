import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidePostComponent } from './hide-post.component';

describe('HidePostComponent', () => {
  let component: HidePostComponent;
  let fixture: ComponentFixture<HidePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HidePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
