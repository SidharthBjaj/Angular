import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ContentService} from "../services/content.service";
import {Content} from "../helper-files/content-interface";

import {MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,} from "@angular/material/dialog";
import { AddContentComponent } from '../add-content/add-content.component';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();


  newContent!: Content;

  error?: string;

  constructor(
      private contentService: ContentService,
      public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  AddNews() {
    if (
        this.newContent.body &&
        this.newContent.title &&
        this.newContent.author
    ) {
      this.error = undefined;
      this.contentService
          .addNewContent(this.newContent)
          .subscribe((serverContent) => {
            this.newContent = serverContent;
            this.newContentEvent.emit(this.newContent);
            console.log(this.newContent.title);
          });
    } else {
      this.error = `You need to add all required fields: ${
          this.newContent.title ? '' : 'title'
      } ${this.newContent.body ? '' : 'body'} ${
          this.newContent.author ? '' : 'author'
      }`;
    }
  }
  openAddNewsDialog() {
    const newsDialog = this.dialog.open(AddContentComponent, {
      width: '700px',
      height: '800px',
    });
    newsDialog.afterClosed().subscribe((newsFromDialog) => {
      console.log(newsFromDialog);
      this.newContent = newsFromDialog;
      if (this.newContent) {
        this.AddNews();
        console.log(this.newContent);
      }
    });
  }
}
