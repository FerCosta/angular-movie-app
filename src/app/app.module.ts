import { MovieService } from 'src/app/services/movie.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';


import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MovieListComponent } from './views/home/movie-list/movie-list.component';
import { AdmComponent } from './views/adm/adm.component';
import { MovieListItemComponent } from './views/home/movie-list-item/movie-list-item.component';
import { UserCreateComponent } from './views/adm/user-create/user-create.component';
import { AdmUserComponent } from './views/adm/adm-user/adm-user.component';
import { AdmMovieComponent } from './views/adm/adm-movie/adm-movie.component';
import { AdmGenreComponent } from './views/adm/adm-genre/adm-genre.component';
import { UserReadComponent } from './views/adm/user-read/user-read.component';
import { UserUpdateComponent } from './views/adm/user-update/user-update.component';
import { UserDeleteComponent } from './views/adm/user-delete/user-delete.component';
import { MovieDeleteComponent } from './views/adm/movie-delete/movie-delete.component';
import { MovieCreateComponent } from './views/adm/movie-create/movie-create.component';
import { MovieReadComponent } from './views/adm/movie-read/movie-read.component';
import { MovieUpdateComponent } from './views/adm/movie-update/movie-update.component';
import { GenreReadComponent } from './views/adm/genre-read/genre-read.component';
import { GenreCreateComponent } from './views/adm/genre-create/genre-create.component';
import { GenreUpdateComponent } from './views/adm/genre-update/genre-update.component';
import { GenreDeleteComponent } from './views/adm/genre-delete/genre-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    MovieListComponent,
    AdmComponent,
    MovieListItemComponent,
    UserCreateComponent,
    AdmUserComponent,
    AdmMovieComponent,
    AdmGenreComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    MovieDeleteComponent,
    MovieCreateComponent,
    MovieReadComponent,
    MovieUpdateComponent,
    GenreReadComponent,
    GenreCreateComponent,
    GenreUpdateComponent,
    GenreDeleteComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
