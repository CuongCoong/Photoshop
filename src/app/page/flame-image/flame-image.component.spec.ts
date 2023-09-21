import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameImageComponent } from './flame-image.component';

describe('FlameImageComponent', () => {
  let component: FlameImageComponent;
  let fixture: ComponentFixture<FlameImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlameImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlameImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
