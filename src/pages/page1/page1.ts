import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page2} from '../page2/page2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  username: string = '';

  constructor(public navCtrl: NavController) {

  }

  public signIn() {
    if (this.username !== ''){
      this.navCtrl.setRoot(Page2);
    }

  }

}
