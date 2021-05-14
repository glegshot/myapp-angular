import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreHomeComponent } from './phone-store-home.component';

describe('PhoneStoreHomeComponent', () => {
  let component: PhoneStoreHomeComponent;
  let fixture: ComponentFixture<PhoneStoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
