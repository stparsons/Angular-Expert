import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTransformComponent } from './text-transform.component';

describe('TextTransformComponent', () => {
  let component: TextTransformComponent;
  let fixture: ComponentFixture<TextTransformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextTransformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTransformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
