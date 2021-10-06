import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomMembersComponent } from './chatroom-members.component';

describe('ChatroomMembersComponent', () => {
  let component: ChatroomMembersComponent;
  let fixture: ComponentFixture<ChatroomMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatroomMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
