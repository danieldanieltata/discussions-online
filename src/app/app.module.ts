import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CountdownModule } from 'ngx-countdown'

import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AppRoutingModule } from './app-routing.module';
import { MakeDiscussionComponent } from './components/make-discussion/make-discussion.component';

import { IpcService } from './services/ipc.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSelectModule, MatOptionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatTooltipModule } from  '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddDiscussionComponent } from './shared/dialogs/add-discussion/add-discussion.component';
import { NgxElectronModule } from 'ngx-electron';


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MakeDiscussionComponent,
    AddDiscussionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountdownModule,
    AppRoutingModule,
    DragDropModule,
    MatSelectModule, 
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    NgxElectronModule,
    BrowserAnimationsModule
  ],
  providers: [IpcService],
  entryComponents: [AddDiscussionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
