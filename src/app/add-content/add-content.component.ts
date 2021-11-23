import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {

  newContent: Content;

  constructor(public dialogRef: MatDialogRef<AddContentComponent>) {
    this.newContent = {
      id: 0,
      title: '',
      body: '',
      author: '',
      imgUrl: '',
      type: '',
      tags: [],
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
