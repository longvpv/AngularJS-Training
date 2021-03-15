import { Component, Input, OnInit } from '@angular/core';
import {ImageType} from "../imageType"
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() imageList?: Array<ImageType>
  previewLive = true
  previewSlide = false
  imageListState: Array<ImageType> | undefined = []

  constructor() { }
  
  ngOnInit(): void {
  }
  onItemChange (item: any) {

  }

  handleCheckLive (e: any)  {
    this.previewLive = true
  }
  handleCheckState (e: any) {
    this.previewLive = false
  }
  PreviewList = () => {
    this.imageListState = [...(this.imageList || [])]
  }
}
