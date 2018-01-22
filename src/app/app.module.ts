import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MovieService} from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
