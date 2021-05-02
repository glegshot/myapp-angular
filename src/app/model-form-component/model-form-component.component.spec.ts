import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormComponentComponent } from './model-form-component.component';

describe('ModelFormComponentComponent', () => {
  let component: ModelFormComponentComponent;
  let fixture: ComponentFixture<ModelFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
