import { Component, OnInit } from '@angular/core';
import { NotesDataService } from 'src/app/notes-data.service';
import { noteObj } from './notes-list.interface';
import { Router } from '@angular/router';
import { map, filter, findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  // providers: [NotesDataService],
})
export class NotesListComponent implements OnInit {
  notesData: noteObj[] = [];

  constructor(public notesService: NotesDataService, public router: Router) {}

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes) => {
      this.notesData = notes;
    });
  }

  removeBtn(note: noteObj) {
    let n = this.notesData.filter((deleteNote) => deleteNote != note);
    this.notesService.updateNotes(n);
  }
}
