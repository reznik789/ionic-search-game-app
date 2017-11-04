import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { IGame } from "../../interfaces/IGame";
import { ApiProvider } from "./../../providers/api/api";
/**
 * Generated class for the GenreSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-genre-single",
  templateUrl: "genre-single.html"
})
export class GenreSinglePage {
  public games: Array<IGame> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider
  ) {}

  private _updateGamesList(genreId: number): void {
    this.api.getGamesByGenreId(genreId).subscribe(
      games => {
        console.log(games);
        this.games = games;
      },
      error => {
        console.log(error);
        alert("Server error");
      }
    );
  }

  ionViewDidLoad() {
    let genreId = this.navParams.data.genreId;
    console.log(genreId);
    if (!genreId) {
      alert("Error genre");
    } else {
      this._updateGamesList(genreId);
    }
  }
}
