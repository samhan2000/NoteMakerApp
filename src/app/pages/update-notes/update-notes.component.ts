import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NotesDataService } from 'src/app/notes-data.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css'],
  // providers: [NotesDataService],
})
export class UpdateNotesComponent implements OnInit {
  public title: string = '';
  public content: string = '';
  public index: number = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesDataService
  ) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.params['title'];
    this.content = this.route.snapshot.params['content'];
    this.index = this.route.snapshot.params['index'];
  }

  submitForm(updateForm: NgForm) {
    this.notesService.updateData(
      updateForm.value.noteContent,
      updateForm.value.noteTitle,
      this.index
    );
    this.router.navigate(['/']);
  }
}
