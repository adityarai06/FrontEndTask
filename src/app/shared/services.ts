import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import {ImagesParams} from './imageParams'
import {ImageView} from './responseInterface'
import { map, timeout } from "rxjs/operators";

@Injectable({
    providedIn: "root",
  })
  export class NasaService{
    private images = [];
    constructor(
    private http: HttpClient)
    {

    }

    public getImageList(params: ImagesParams): Observable<ImageView[]> {
        console.log("Method Reached")
        const url = `https://api.nasa.gov/planetary/apod`;
        return this.http
          .get(url, {
            params: { ...params },
          })
          .pipe(
            map((images: ImageView[]) => {                          
              return images;
            })
          );
      }
  } 