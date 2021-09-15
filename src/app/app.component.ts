import { Component, OnInit } from '@angular/core';
import { NasaService } from './shared/services';
import {ImageView} from './shared/responseInterface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontEndTask';
  imageList:ImageView[] ;

  constructor(
    private ImageService: NasaService,
  ){

  }

  getImages()
  {
    console.log("getImages")
    const params = {
      api_key:'DfaDMIwoRC6hexVMpaBTPhWGNreUSd5TPE5bZkeL',
      count: '10'
      
    };
    this.ImageService.getImageList(params)
    .toPromise()
    .then((images:ImageView[])=>{
      
      this.imageList = images
      console.log(this.imageList)
    })
  }

  ngOnInit()
  {
    this.getImages();
  }
}
