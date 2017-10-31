import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameGanresPage } from './game-ganres';

@NgModule({
  declarations: [
    GameGanresPage,
  ],
  imports: [
    IonicPageModule.forChild(GameGanresPage),
  ],
})
export class GameGanresPageModule {}
