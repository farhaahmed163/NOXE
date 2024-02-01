import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'about', canActivate: [authGuard], component: AboutComponent },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },

  { path: 'movies', canActivate: [authGuard], component: MoviesComponent },
  {
    path: 'movie-details/:id/:media_type',
    canActivate: [authGuard],
    component: MovieDetailsComponent,
  },
  { path: 'tv', canActivate: [authGuard], component: TvComponent },
  { path: 'people', canActivate: [authGuard], component: PeopleComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
