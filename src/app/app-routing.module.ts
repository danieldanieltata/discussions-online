import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component'; 
import { MakeDiscussionComponent } from './components/make-discussion/make-discussion.component'; 

const routes: Routes = [
  { path: 'main-page', component: MainViewComponent },
  { path: 'make-discussion', component: MakeDiscussionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})


export class AppRoutingModule {}
