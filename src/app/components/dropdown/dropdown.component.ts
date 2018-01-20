import { Component, OnInit } from '@angular/core';
import MovieService from './../../services/movie';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovie().subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('complete')
    );
  }

}
