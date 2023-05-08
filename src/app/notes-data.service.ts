import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { noteObj } from './pages/notes-list/notes-list.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesDataService {
  constructor() {}

  private notes = new BehaviorSubject<noteObj[]>([
    {
      title: 'Cook',
      content: 'I need to Cook Today!',
    },
    {
      title: 'Do Shopping',
      content: 'Need to wishlist some items today!',
    },
    {
      title: 'Deadline approaching - June 2023',
      content: 'Deadline for your project is approaching soon',
    },
    {
      title: 'Eat healthy',
      content: 'A gentle reminder to keep yourself healthy',
    },
    {
      title: 'Sleep Early',
      content: 'Do remember "Early to bed and Early to rise" principle',
    },
    {
      title: 'What happens....',
      content:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam deserunt ipsa pariatur quis eveniet ut, corporis voluptates architecto, itaque praesentium illum nobis ex similique ipsum aliquam repellendus ad a excepturi, recusandae iusto nulla veniam! Possimus ex sed et eligendi. Accusamus eaque natus maxime. Facilis, corrupti explicabo. Amet eveniet quae natus.',
    },
  ]);

  getNotes() {
    return this.notes.asObservable();
  }

  updateData(newData: string, newContent: string, index: number) {
    const updatedNotes = [...this.notes.getValue()];
    updatedNotes[index].title = newData;
    updatedNotes[index].content = newContent;
    this.notes.next(updatedNotes);
  }

  addNotes(noteDetails: noteObj) {
    const currentNoteDetails = this.notes.getValue();
    currentNoteDetails.push(noteDetails);
    console.log(currentNoteDetails);
  }

  updateNotes(notes: any) {
    this.notes.next(notes);
  }
}
