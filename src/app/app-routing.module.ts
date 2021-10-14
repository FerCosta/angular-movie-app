import { UserDeleteComponent } from './views/adm/user-delete/user-delete.component';
import { UserReadComponent } from './views/adm/user-read/user-read.component';
import { AdmGenreComponent } from './views/adm/adm-genre/adm-genre.component';
import { AdmMovieComponent } from './views/adm/adm-movie/adm-movie.component';
import { AdmUserComponent } from './views/adm/adm-user/adm-user.component';
import { UserCreateComponent } from './views/adm/user-create/user-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { AdmComponent } from './views/adm/adm.component';

import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { UserUpdateComponent } from './views/adm/user-update/user-update.component';
import { MovieCreateComponent } from './views/adm/movie-create/movie-create.component';
import { MovieReadComponent } from './views/adm/movie-read/movie-read.component';
import { MovieUpdateComponent } from './views/adm/movie-update/movie-update.component';
import { MovieDeleteComponent } from './views/adm/movie-delete/movie-delete.component';
import { GenreCreateComponent } from './views/adm/genre-create/genre-create.component';
import { GenreReadComponent } from './views/adm/genre-read/genre-read.component';
import { GenreUpdateComponent } from './views/adm/genre-update/genre-update.component';
import { GenreDeleteComponent } from './views/adm/genre-delete/genre-delete.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "adm", component: AdmComponent, canActivate: [AuthGuard] },
  { path: "adm/user", component: AdmUserComponent, canActivate: [AuthGuard] },
  { path: "user/create", component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: "user/read", component: UserReadComponent, canActivate: [AuthGuard] },
  { path: "user/update/:id", component: UserUpdateComponent, canActivate: [AuthGuard] },
  { path: "user/delete/:id", component: UserDeleteComponent, canActivate: [AuthGuard] },
  { path: "adm/movie", component: AdmMovieComponent, canActivate: [AuthGuard] },
  { path: "movie/create", component: MovieCreateComponent, canActivate: [AuthGuard] },
  { path: "movie/read", component: MovieReadComponent, canActivate: [AuthGuard] },
  { path: "movie/update/:id", component: MovieUpdateComponent, canActivate: [AuthGuard] },
  { path: "movie/delete/:id", component: MovieDeleteComponent, canActivate: [AuthGuard] },
  { path: "adm/genre", component:AdmGenreComponent, canActivate: [AuthGuard] },
  { path: "genre/create", component: GenreCreateComponent, canActivate: [AuthGuard] },
  { path: "genre/read", component: GenreReadComponent, canActivate: [AuthGuard] },
  { path: "genre/update/:id", component: GenreUpdateComponent, canActivate: [AuthGuard] },
  { path: "genre/delete/:id", component: GenreDeleteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
