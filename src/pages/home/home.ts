import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public title: string;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad(){
   this.title = 'Home Page'
  }

}
