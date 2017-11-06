import { IGenre } from './../../interfaces/IGenre';
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
  public title: string = "";
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
    let genre: IGenre = this.navParams.data.genre;
    console.log(genre);
    if (!genre.id) {
      alert("Error genre");
    } else {
      this.title = genre.name;
      this._updateGamesList(genre.id);
    }
  }

  detailsPage(game: IGame) {
    // this.navCtrl.push(DetailsPage, {
    //   game: game
    // })
    console.log(game)
  }

}
