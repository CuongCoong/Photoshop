import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeImageComponent } from './meme-image.component';

describe('MemeImageComponent', () => {
  let component: MemeImageComponent;
  let fixture: ComponentFixture<MemeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
