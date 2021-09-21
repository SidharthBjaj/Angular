import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.addContent({
      id: 1,
      author: "Sidharth Bajaj",
      title: "Angular Assignment 1",
      body: "This is body for article.",
    });
  }
  ngOnInit(): void {
  }
}
