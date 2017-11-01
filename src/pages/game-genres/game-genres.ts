import { ApiProvider } from "./../../providers/api/api";
import { IGenre } from "./../../interfaces/IGenre";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the GameGenresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-game-genres",
  templateUrl: "game-genres.html"
})
export class GameGenresPage {
  public title: string;
  public genres: Array<IGenre> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {}

  ionViewDidLoad() {
    this.title = "Game Ganres";
    if (this.genres.length === 0) {
      this.api.getGenres().subscribe(
        genres => {
          console.log(genres);
          this.genres = genres;
        },
        error => {
          console.log(error);
          alert("Server error");
        }
      );
    }
  }
}
