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
  dislikedImage: String[];
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
      var likesStrDate = this.cookie.get("likes");
      this.likedImage = likesStrDate.split(":");

      var dislikesStrDate = this.cookie.get("dislikes");
      this.dislikedImage = dislikesStrDate.split(":");

      for (var i = 0; i < this.imageList.length; i++) {
        if ((this.dislikedImage.indexOf(this.imageList[i].date) == -1) &&
            (this.likedImage.indexOf(this.imageList[i].date) != -1)) {
          var ele = document.getElementById(this.imageList[i].date);
          ele.classList.toggle("button_green");
        } else if ((this.likedImage.indexOf(this.imageList[i].date) == -1) &&
        (this.dislikedImage.indexOf(this.imageList[i].date) != -1)) {
          var ele = document.getElementById(this.imageList[i].date + 'd');
          ele.classList.toggle("button_red");
        }
      }
    }, 1500);

  }

  filter() {
    this.getImages();
  }

  ngOnInit() {
    this.getImages();
  }

  callLikeFunction(event, date) {
    this.status = !this.status;
    this.dateList = this.cookie.get("likes") + ":" + date;
    this.cookie.set("likes", this.dateList);
    var id = document.getElementById(date);
    id.classList.toggle("button_green");
    var invertId = document.getElementById(date + 'd');
    invertId.classList.remove("button_red");
    var editedCookies = this.cookie.get("dislikes").replace(date, '');
    this.cookie.set("dislikes", editedCookies);
  }

  callDislikeFunction(event, date) {
    this.status = !this.status;
    this.dateList = this.cookie.get("dislikes") + ":" + date;
    this.cookie.set("dislikes", this.dateList);
    var id = document.getElementById(date + 'd');
    id.classList.toggle("button_red");
    var invertId = document.getElementById(date);
    invertId.classList.remove("button_green");
    var editedCookies = this.cookie.get("likes").replace(date, '');
    this.cookie.set("likes", editedCookies);
  }
}