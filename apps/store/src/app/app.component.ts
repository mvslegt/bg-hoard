import { Component, OnInit } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  games$: Observable<any[]>;
  formatRating = formatRating;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.title = 'Board Game Hoard';
    this.games$ = this.httpClient.get<any[]>('api/games');
  }
}
