import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { UpdateNotesComponent } from './pages/update-notes/update-notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesDataService } from './notes-data.service';
import { AddNotesModule } from './pages/add-notes/add-notes/add-notes.module';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    MainLayoutComponent,
    UpdateNotesComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AddNotesModule,
    ReactiveFormsModule,
  ],
  providers: [NotesDataService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
