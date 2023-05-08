import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNotesComponent } from './add-notes.component';
import { NotesDataService } from 'src/app/notes-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddNotesComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AddNotesComponent],
  providers: [NotesDataService],
})
export class AddNotesModule {}
