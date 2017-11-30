import { Component } from "@angular/core";
import { Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { IPage } from "./../interfaces/IPage";
import { HomePage } from "../pages/home/home";
import { GameGenresPage } from "../pages/game-genres/game-genres";

const HOME_PAGE = 1;
const GANRES_PAGE = 2;

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  public rootPage: any = HomePage;
  public pages: Array<IPage> = [];
  public active: number;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this._setPages();
    });
  }

  private _setPages() {
    this.pages = [
      <IPage>{ title: "Home", component: HomePage, id: HOME_PAGE },
      <IPage>{
        title: "Ganres",
        component: GameGenresPage,
        id: GANRES_PAGE
      }
    ];
  }

  public openPage = (page: IPage) => {
    this.menuCtrl.close();
    this.active = page.id;
    this.rootPage = page.component;
  };
}
