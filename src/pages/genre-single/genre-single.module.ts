import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenreSinglePage } from './genre-single';

@NgModule({
  declarations: [
    GenreSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(GenreSinglePage),
  ],
})
export class GenreSinglePageModule {}
