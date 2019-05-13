import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {MatDialog } from '@angular/material';

import { AddDiscussionComponent } from '../../shared/dialogs/add-discussion/add-discussion.component';

import { IpcService } from '../../services/ipc.service';

import { ElectronService } from 'ngx-electron';

declare var electron: any;

@Component({
  selector: 'app-make-discussion',
  templateUrl: './make-discussion.component.html',
  styleUrls: ['./make-discussion.component.css'],
  providers: [IpcService]
})
export class MakeDiscussionComponent implements OnInit {

  discussions = [];
  presentors = [];

  discussionTitle : string = '';
  discussionTime  : number;
  discussionDesc  : string = '';

  editIndex = -1;

  constructor(private _electronService: ElectronService, public dialog: MatDialog) {}

  ngOnInit() {
    if(localStorage.getItem('discussions'))
      this.discussions = JSON.parse(localStorage.getItem('discussions'));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.presentors, event.previousIndex, event.currentIndex);
  }

  changeDiscussion(event){  
    if(event.value == '[דיון חדש]'){
      this.discussionTitle = ''
      this.discussionTime  = null;
      this.discussionDesc  = '';
      this.presentors      = [];
      
      this.editIndex = -1;
      return;
    }

    let i = event.value.split('.')[1];
    this.editIndex = i;

    let selectedDiscussion = this.discussions[i];
    this.discussionTitle = selectedDiscussion.discussionTitle;
    this.discussionTime  = selectedDiscussion.discussionTime;
    this.discussionDesc  = selectedDiscussion.discussionDesc;
    this.presentors      = selectedDiscussion.presentors;
  }
  
  openAddPresentor(){
    const dialogRef = this.dialog.open(AddDiscussionComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(presentorData => {
      if(presentorData){
        presentorData.presentorTime = presentorData.presentorTime +  Number('0.' + new Date().getMilliseconds());
        this.presentors.push(presentorData);
      }
    });
  }

  deletePresentor(i){
    this.presentors.splice(i, 1);
  }

  editPresentor(i){
    const dialogRef = this.dialog.open(AddDiscussionComponent, {
      width: '400px',
      data: this.presentors[i]
    });

    dialogRef.afterClosed().subscribe(presentorData => {
      if(presentorData){
        presentorData.presentorTime = presentorData.presentorTime +  Number('0.' + new Date().getMilliseconds());
        this.presentors[i] = presentorData;
      }
    });
  }

  showDiscussion(){
    electron.ipcRenderer.send('showDiscussion', { discussionTitle: this.discussionTitle, discussionTime: this.discussionTime, discussionDesc: this.discussionDesc, presentors: [...this.presentors] });
    // if(this._electronService.isElectronApp) 
      // this._electronService.ipcRenderer.send('showDiscussion', { discussionTitle: this.discussionTitle, discussionTime: this.discussionTime, discussionDesc: this.discussionDesc, presentors: [...this.presentors] });
  }

  saveDiscussion(){
    var disucssionData = {
      discussionTitle: this.discussionTitle,
      discussionTime: this.discussionTime,
      discussionDesc: this.discussionDesc,
      presentors: this.presentors
    }
    if(this.editIndex != -1){
      var discussions = JSON.parse(localStorage.getItem('discussions'));
      discussions[this.editIndex] = disucssionData;

      localStorage.setItem('discussions', JSON.stringify(discussions));
      this.discussions = JSON.parse(localStorage.getItem('discussions'));
      return;
    }

    if(localStorage.getItem('discussions')){
      var discussions = JSON.parse(localStorage.getItem('discussions'));
      discussions.push(disucssionData);
      localStorage.setItem('discussions', JSON.stringify(discussions));
    }else{
      localStorage.setItem('discussions', JSON.stringify([disucssionData]));

    }

    this.discussions = JSON.parse(localStorage.getItem('discussions'));
  }

}
