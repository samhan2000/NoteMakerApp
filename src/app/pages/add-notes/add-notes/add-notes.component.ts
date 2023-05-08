import { Component } from '@angular/core';
import { NotesDataService } from 'src/app/notes-data.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css'],
})
export class AddNotesComponent {
  constructor(private notesService: NotesDataService, public router: Router) {}

  // form = new FormGroup({
  //   title: new FormControl('', [Validators.required, Validators.minLength(1)]),
  //   content: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(1),
  //   ]),
  // });

  onSubmit(addNoteDetails: NgForm) {
    if (addNoteDetails.touched == false) return;

    if (addNoteDetails.valid == false) return;
    this.notesService.addNotes(addNoteDetails.value);
    console.log(addNoteDetails.value);
    this.router.navigate(['/']);
  }
}
