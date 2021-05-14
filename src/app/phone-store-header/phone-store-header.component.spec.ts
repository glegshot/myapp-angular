import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreHeaderComponent } from './phone-store-header.component';

describe('PhoneStoreHeaderComponent', () => {
  let component: PhoneStoreHeaderComponent;
  let fixture: ComponentFixture<PhoneStoreHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
