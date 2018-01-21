import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {

  url = 'https://api.themoviedb.org/3/movie/popular?api_key=1c27e642d8cedef632716f85732ec043';

  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get(this.url);
  }

}
