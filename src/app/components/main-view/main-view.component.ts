import { Component, OnInit } from '@angular/core';

// import { ElectronService } from 'ngx-electron';
// import discussionData from '../../../assets/data/discussionData.json';

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

  constructor() { 
    // _electronService.ipcRenderer.send('getData', '');
    // _electronService.ipcRenderer.on('getData', (event, data) => {

    //   this.discussionTitle = data.discussionTitle;
      
    //   this.presentors = data.presentors;
    //   this.presentorsCopy = this.presentors.slice();
    //   this.currentPresentor = this.presentorsCopy.shift();
    
    // });


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
    // this._electronService.ipcRenderer.send('exit');
    window.close();
  }

  file:any;
  fileChanged(e) {
      this.file = e.target.files[0];
      this.uploadDocument(this.file)
  }
  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.dir(String(fileReader.result));
      let discussionData = JSON.parse(String(fileReader.result));

      if("discussionName" in discussionData && "presentors" in discussionData){
        this.discussionTitle = discussionData.discussionName;
        
        this.presentors = discussionData.presentors;
        this.presentorsCopy = this.presentors.slice();
  
        this.currentPresentor = this.presentorsCopy.shift();
      }
      else 
        alert("Bad Data");
    }
    console.dir(fileReader.readAsText(this.file));
  }

 

}
