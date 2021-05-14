import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStoreProductComponent } from './phone-store-product.component';

describe('PhoneStoreProductComponent', () => {
  let component: PhoneStoreProductComponent;
  let fixture: ComponentFixture<PhoneStoreProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStoreProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
