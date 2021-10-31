import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContents = new EventEmitter<Content>();

  newContent!: Content;

  error?: string;
  constructor() { }

  ngOnInit(): void {
  }

  AddNews(
      title: string,
      body: string,
      author: string
  ) {
    this.newContent = {
      id: 0,
      title: title,
      body:body,
      author:author
    };


    let promiseAddInfo = new Promise((success, fail) => {
      if (body && title && author) {
        this.error = undefined;
        this.newContents.emit(this.newContent);
        success(`Infomation Added! - ${this.newContent.title}`);
      } else {
        this.error = `Please Add content in : ${
            title ? '' : 'title'
        } ${body ? '' : 'body'} 
        ${author ? '' : 'author'}`;
        fail(this.error);
      }
    });

    promiseAddInfo
        .then((successMessage) => console.log(successMessage))
        .catch((failMessage) => console.log(failMessage));
  }
}
