import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  kittenList: Kitten[] = [];
  userKittens: Kitten[] = [];

  getKitten(event: Kitten): void {
    // add Kitten to the adoption List
    this.kittenList.push(event);
  }

  giveMeKitten(kitten: Kitten) {
    //add kitten to the user list
    this.userKittens.push(kitten);
    // remove kitten from the adoption list
    let kittenIndex = this.kittenList.indexOf(kitten);
    this.kittenList.splice(kittenIndex, 1);
  }
}
