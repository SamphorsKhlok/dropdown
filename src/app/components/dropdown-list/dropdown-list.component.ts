import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownListComponent implements OnInit {
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
    this.toggle();
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
