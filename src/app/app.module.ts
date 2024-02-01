import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MediaItemComponent } from './media-item/media-item.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SerachPipe } from './serach.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    NavbarComponent,
    NotfoundComponent,
    PeopleComponent,
    RegisterComponent,
    TvComponent,
    LoginComponent,
    MediaItemComponent,
    MovieDetailsComponent,
    WatchPipe,
    SeemorePipe,
    SerachPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
