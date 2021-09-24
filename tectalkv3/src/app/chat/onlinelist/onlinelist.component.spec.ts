import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinelistComponent } from './onlinelist.component';

describe('OnlinelistComponent', () => {
  let component: OnlinelistComponent;
  let fixture: ComponentFixture<OnlinelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
