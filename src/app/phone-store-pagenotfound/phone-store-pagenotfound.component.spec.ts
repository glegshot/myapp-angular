import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneStorePagenotfoundComponent } from './phone-store-pagenotfound.component';

describe('PhoneStorePagenotfoundComponent', () => {
  let component: PhoneStorePagenotfoundComponent;
  let fixture: ComponentFixture<PhoneStorePagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneStorePagenotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneStorePagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
