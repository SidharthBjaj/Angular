import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ContentService} from "../services/content.service";
import {Content} from "../helper-files/content-interface";
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
  constructor(private  contentService: ContentService) { }

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
        this.newContentEvent.emit(this.newContent);
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
  onUpdateValue(
      title: string,
      body: string,
      author: string,
      imgUrl: string,
      type: string,
      tags: string
  ) {
    this.newContent = {
      id: 0,
      title: title,
      body: body,
      author: author,
      imgUrl: imgUrl,
      type: type,
      tags: [tags],
    };

    console.log(this.newContent);

    if (body && title && author) {
      this.error = undefined;
      this.contentService
          .updateContent(this.newContent)
          .subscribe((response) => {
            console.log(response);
          });
    } else {
      this.error = `all data in fields: ${
          title ? '' : 'title,'
      } ${body ? '' : 'body, and'} ${author ? '' : 'author'}`;
    }
  }
}

