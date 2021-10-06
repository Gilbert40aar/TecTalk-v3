import { Component, OnInit } from '@angular/core';
import { IChatrooms } from 'src/app/interfaces/chatrooms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-chatroom',
  templateUrl: './create-chatroom.component.html',
  styleUrls: ['./create-chatroom.component.css']
})
export class CreateChatroomComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  chatrooms: IChatrooms[] = [];

  newChatroom(form: NgForm) {
    let data: IChatrooms = {
      ChatroomName: form.value.ChatroomName
    }
    this.api.createChatroom(data);
    console.log(data);
    
  }

}
