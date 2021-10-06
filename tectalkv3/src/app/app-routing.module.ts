import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { ChatComponent } from './chat/chat.component';
import { LogoutComponent} from './logout/logout.component';
import { GuardService } from './services/guard.service';
import { UserlistComponent } from './chat/userlist/userlist.component';
import { AccountComponent } from './chat/account/account.component';
import { ChatroomsComponent } from './chat/chatrooms/chatrooms.component';
import { UpdateAccountComponent } from './chat/update-account/update-account.component';
import { SecurityComponent } from './chat/security/security.component';
import { CreateChatroomComponent } from './create-chatroom/create-chatroom.component';
import { ChatroomMembersComponent } from './chat/chatroom-members/chatroom-members.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recoverpw', component: RecoverpwComponent},
  {path: 'chat', component: ChatComponent, canActivate: [GuardService], data: {only: '1'}, runGuardsAndResolvers: 'always', children: [
    { path: 'userlist', component: UserlistComponent },
    { path: 'account', component: AccountComponent},
    { path: 'chatrooms', component: ChatroomsComponent},
    { path: 'update-account', component: UpdateAccountComponent},
    { path: 'security', component: SecurityComponent},
    { path: 'create-chatroom', component: CreateChatroomComponent},
    { path: 'Chatroom', component: ChatroomMembersComponent}
  ]},
  {path: 'logout', component: LogoutComponent, canActivate: [GuardService], data: {only: '1'}, runGuardsAndResolvers: 'always'},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
