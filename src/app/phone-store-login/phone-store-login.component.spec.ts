import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreLoginComponent } from './phone-store-login.component';

describe('PhoneStoreLoginComponent', () => {
  let component: PhoneStoreLoginComponent;
  let fixture: ComponentFixture<PhoneStoreLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
