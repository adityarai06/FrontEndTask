import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tryevent',
  templateUrl: './tryevent.component.html',
  styleUrls: ['./tryevent.component.css']
})
export class TryeventComponent implements OnInit {

  constructor() { }

  eventGenerate(event:any)
  {
    console.log(event)
  }

  ngOnInit() {
  }

}
