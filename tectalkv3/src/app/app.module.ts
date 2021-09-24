import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './chat/account/account.component';
import { ChatroomsComponent } from './chat/chatrooms/chatrooms.component';
import { UserlistComponent } from './chat/userlist/userlist.component';
import { UpdateAccountComponent } from './chat/update-account/update-account.component';
import { SecurityComponent } from './chat/security/security.component';
import { OnlinelistComponent } from './chat/onlinelist/onlinelist.component';
import { ChatMessagesComponent } from './chat/chat-messages/chat-messages.component';
import { MessagesComponent } from './chat/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoverpwComponent,
    ChatComponent,
    LogoutComponent,
    AccountComponent,
    ChatroomsComponent,
    UserlistComponent,
    UpdateAccountComponent,
    SecurityComponent,
    OnlinelistComponent,
    ChatMessagesComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
