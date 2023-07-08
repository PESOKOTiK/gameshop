import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GamesTableComponent } from './games-table/games-table.component';
import { AddGameComponent } from './add-game/add-game.component';
import { DevelopersTabComponent } from './developers-tab/developers-tab.component';
import { GenresTabComponent } from './genres-tab/genres-tab.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GamesTableComponent,
    AddGameComponent,
    DevelopersTabComponent,
    GenresTabComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
