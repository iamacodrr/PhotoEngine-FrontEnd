import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDashComponent } from './photo-dash.component';

describe('PhotoDashComponent', () => {
  let component: PhotoDashComponent;
  let fixture: ComponentFixture<PhotoDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
