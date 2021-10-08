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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "adm", component: AdmComponent, canActivate: [AuthGuard] },
  { path: "adm/user", component: AdmUserComponent, canActivate: [AuthGuard] },
  { path: "user/create", component: UserCreateComponent, canActivate: [AuthGuard] },
  { path: "user/read", component: UserReadComponent, canActivate: [AuthGuard] },
  { path: "user/update/:id", component: UserUpdateComponent, canActivate: [AuthGuard] },
  { path: "adm/movie", component: AdmMovieComponent, canActivate: [AuthGuard] },
  { path: "adm/genre", component:AdmGenreComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
