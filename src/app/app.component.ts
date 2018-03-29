import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgProgress} from 'ngx-progressbar';
import {Http} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor (public progressService: NgProgress, public http: Http) {
}
ngOnInit() {
  // tslint:disable-next-line:no-unused-expression



  this.progressService.start();
  setTimeout(() => {
    this.progressService.set(0.1);
    this.progressService.done();
  },500);
 

}


}
