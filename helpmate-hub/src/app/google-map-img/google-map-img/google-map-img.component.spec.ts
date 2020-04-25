import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapImgComponent } from './google-map-img.component';

describe('GoogleMapImgComponent', () => {
  let component: GoogleMapImgComponent;
  let fixture: ComponentFixture<GoogleMapImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
