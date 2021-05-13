import { Component, OnInit } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  games$: Observable<Game[]>;
  formatRating = formatRating;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.title = 'Board Game Hoard';
    this.games$ = this.httpClient.get<Game[]>('api/games');
  }
}
