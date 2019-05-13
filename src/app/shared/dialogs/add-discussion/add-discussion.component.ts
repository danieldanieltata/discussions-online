import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-discussion',
  templateUrl: './add-discussion.component.html',
  styleUrls: ['./add-discussion.component.css']
})
export class AddDiscussionComponent implements OnInit {

  public presentorName   : string;
  public presentorTime   : number;
  public presentorTitle  : string;

  constructor(public dialogRef: MatDialogRef<AddDiscussionComponent>, @Inject(MAT_DIALOG_DATA) public data) {
    if(data){
      this.presentorName = data.presentorName;
      this.presentorTime = data.presentorTime;
      this.presentorTitle = data.presentorTitle;
    }
   }

  ngOnInit() {
  }

  acceptPresentor(){
    if(this.presentorName && this.presentorTime && this.presentorTitle)
      this.dialogRef.close({presentorName: this.presentorName, presentorTime: this.presentorTime, presentorTitle: this.presentorTitle});
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
