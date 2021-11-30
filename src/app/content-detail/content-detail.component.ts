import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  id!: number;
  content!: Content ;
  constructor(
      private route: ActivatedRoute,
      private contentService: ContentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      this.id = +params.get('id');
      this.contentService.getContent(this.id).subscribe((detailContent) => {
        this.content = detailContent;
      });
    });
  }

  onImageClick(id: number) {
    console.log(`Image clicked: ${id}`);
  }
}
