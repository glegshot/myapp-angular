import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreNotificationComponent } from './phone-store-notification.component';

describe('PhoneStoreNotificationComponent', () => {
  let component: PhoneStoreNotificationComponent;
  let fixture: ComponentFixture<PhoneStoreNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
