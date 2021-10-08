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
