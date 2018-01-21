import { Component, OnInit } from '@angular/core';
import { MovieService} from './../../services/movie.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  items = [];
  selectedItem = {};
  isOpen = false;

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.movieService.getMovie().subscribe(
      data => this.items = data['results'],
      error => console.log(error),
      () => console.log('complete')
    );
  }
  update(item) {
    this.selectedItem = item;
  }
  toggle() {
    if (this.isOpen) {
      this.isOpen = false;
    }else {
      this.isOpen = true;
    }
  }
  clear() {
    this.selectedItem = {};
  }

}
