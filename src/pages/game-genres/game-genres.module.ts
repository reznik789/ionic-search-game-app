import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameGenresPage } from './game-genres';

@NgModule({
  declarations: [
    GameGenresPage,
  ],
  imports: [
    IonicPageModule.forChild(GameGenresPage),
  ],
})
export class GameGenresPageModule {}
