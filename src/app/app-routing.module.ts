import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './pages/add-notes/add-notes/add-notes.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { UpdateNotesComponent } from './pages/update-notes/update-notes.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
  },
  {
    path: 'update',
    component: UpdateNotesComponent,
  },
  {
    path: 'add-note',
    component: AddNotesComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
