import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  movies = [
      'Episode I - The Phantom Menace',
      'Episode II - Attack of the Clones',
      'Episode III - Revenge of the Sith',
      'Episode IV - A New Hope',
      'Episode V - The Empire Strikes Back',
  ];
  isPaused = false;
  presentors = [
      { presentorName: 'אור בדיחי', title: 'שדרוג של כל כיפות ברדד', time: 10 },
      { presentorName: 'שיר בדיחי', title: 'עד מתי ספמט 16', time: 10.1 },
      { presentorName: 'דניאל טלאור מוזס', title: 'עד מתיייי', time: 60 }
  ];
  presentorsCopy = this.presentors.slice();
  currentPresentor = { presentorName: '', title: '', time: 0 };
  nextDiscussionName = 'דיון על עד מתי';
  nextDiscussionTime = '14:20';

  constructor() { }

  ngOnInit() {
    this.currentPresentor = this.presentorsCopy.shift();
  }

  onFinished(){
    if (this.presentorsCopy.length == 0)
      return;
    this.currentPresentor = this.presentorsCopy.shift();
  }

  nextPresentor(){
    var nextPresentorIndex = this.presentors.indexOf(this.currentPresentor) + 1;
    if (nextPresentorIndex != this.presentors.length) {
        this.currentPresentor = this.presentors[nextPresentorIndex];
        this.presentorsCopy.shift();
    }
  }

  previousPresentor(){
    var preveiousPresentorIndex = this.presentors.indexOf(this.currentPresentor) - 1;
    if (preveiousPresentorIndex >= 0) {
        this.presentorsCopy.unshift(this.currentPresentor);
        this.currentPresentor = this.presentors[preveiousPresentorIndex];
    }
  }
}
