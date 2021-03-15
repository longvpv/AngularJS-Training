import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageType } from '../imageType';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: ImageType[] = [
    {
    id: 1,
    title: 'image 1',
    previewUrl: null
  },
  {
    id: 2,
    title: 'image 2',
    previewUrl: null
  },
];
disableRemove = false
imageForm = new FormControl("title", [
  Validators.required,
  Validators.maxLength(17),
])

handleAddClick() {
 let newImageList = this.images
 let newId = Math.trunc(Math.random()*100000)
 newImageList.push({
  id: newId,
  title: `image ${newId}`,
  previewUrl: null
 })
 this.images = newImageList
 this.disableRemove = false
};
handleRemoveAllClick() {
  let newImageList = [this.images[0]]
  this.images = newImageList
  this.disableRemove = true
};
handleRemoveImageClick(i: number) {
  let newImageList = this.images;
  newImageList.splice(i, 1)
  this.images = newImageList
  if (this.images.length === 1) this.disableRemove = true
}
preview(files: FileList | null, i: number) {
  console.log(files)
  if (files && (files[0].type !== "image/jpeg" )) {
    this.images[i].previewUrl = undefined
    return
  }
  var reader = new FileReader();
  if (files !== null) { reader.readAsDataURL(files[0]) }; 
  reader.onload = (_event) => { 
    this.images[i].previewUrl = reader.result; 
  }
}
  constructor() { }

  ngOnInit(): void {

}
  

}
