import { Component, OnInit } from '@angular/core';
import { NasaService } from './shared/services';
import { ImageView } from './shared/responseInterface'
import { CookieService } from 'ngx-cookie-service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'frontEndTask';
  fromDate: string;
  toDate: string;
  imageList: ImageView[];
  btnStyle = 'button';
  dateList;
  likedImage: String[];
  status: boolean = false;
  load: boolean = true;
  constructor(
    private ImageService: NasaService, private cookie: CookieService
  ) {}

  getImages() {

    const params = {
      api_key: 'DfaDMIwoRC6hexVMpaBTPhWGNreUSd5TPE5bZkeL',
      start_date: this.fromDate ? this.fromDate : '2021-09-15',
      end_date: this.toDate ? this.toDate : new Date().toISOString().split('T')[0],
    };

    this.ImageService.getImageList(params)
      .toPromise()
      .then((images: ImageView[]) => {
        this.imageList = images

      })

    setTimeout(() => {
      var strDate = this.cookie.get("name");
      this.likedImage = strDate.split(":");

      for (var i = 0; i < this.imageList.length; i++) {
        for (var j = 0; j < this.likedImage.length; j++) {
          if (this.likedImage[j] == this.imageList[i].date) {
            var ele = document.getElementById(this.imageList[i].date);
            ele.classList.toggle("button_red");
          }
        }

      }
    }, 3000);

  }

  filter() {
    this.getImages();
  }

  ngOnInit() {
    this.getImages();
  }

  callFunction(event, date) {
    this.status = !this.status;
    this.dateList = this.cookie.get("name") + ":" + date;
    this.cookie.set("name", this.dateList);
    var id = document.getElementById(date)
    id.classList.toggle("button_red");
  }
}