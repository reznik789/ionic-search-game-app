import { GameGenresPage } from "./../pages/game-genres/game-genres";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpModule } from "@angular/http";
import { GenreSinglePage } from "../pages/genre-single/genre-single";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ApiProvider } from "../providers/api/api";

@NgModule({
  declarations: [MyApp, HomePage, GameGenresPage, GenreSinglePage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, GameGenresPage, GenreSinglePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ]
})
export class AppModule {}
