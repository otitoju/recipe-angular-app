import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  indexImage: string = ""
  contents: any[] = []

  constructor(private service: IndexService) { }

  ngOnInit(): void {
    this.getIndexImage()
    this.getContent()
  }

  getIndexImage() {
    this.indexImage = this.service.handleIndexImage()
  }

  getContent() {
    this.contents = this.service.handleContent()
  }

}
