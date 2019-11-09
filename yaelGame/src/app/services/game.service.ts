import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }

  getData() {
    return this.http.get('https://opentdb.com/api.php?amount=10&type=multiple');
  }
}
