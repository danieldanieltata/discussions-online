import { Component, OnInit } from '@angular/core';

import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  isPaused = false;
  presentors = [];
  presentorsCopy = [];

  currentPresentor = { presentorName: '', presentorTitle: '', presentorTime: 0 };
  
  nextDiscussionName = '-';
  nextDiscussionTime = '-';

  discussionTitle = ''

  constructor(private _electronService: ElectronService) { 
    _electronService.ipcRenderer.send('getData', '');
    _electronService.ipcRenderer.on('getData', (event, data) => {

      this.discussionTitle = data.discussionTitle;
      
      this.presentors = data.presentors;
      this.presentorsCopy = this.presentors.slice();
      this.currentPresentor = this.presentorsCopy.shift();
    });
  }

  ngOnInit() {
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

  exit(){
    this._electronService.ipcRenderer.send('exit');
  }

}
