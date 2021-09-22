import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverpwComponent } from './recoverpw/recoverpw.component';
import { ChatComponent } from './chat/chat.component';
import { LogoutComponent} from './logout/logout.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recoverpw', component: RecoverpwComponent},
  {path: 'chat', component: ChatComponent, canActivate: [GuardService], data: {only: '1'}, runGuardsAndResolvers: 'always'},
  {path: 'logout', component: LogoutComponent, canActivate: [GuardService], data: {only: '1'}, runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
