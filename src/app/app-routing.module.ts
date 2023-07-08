import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GamesTableComponent } from './games-table/games-table.component';
import { AddGameComponent } from './add-game/add-game.component';
import { DevelopersTabComponent } from './developers-tab/developers-tab.component';
import { GenresTabComponent } from './genres-tab/genres-tab.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'games', component: GamesTableComponent },
  { path: 'games/add', component: AddGameComponent },
  { path: 'developers', component: DevelopersTabComponent },
  { path: 'genres', component: GenresTabComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' }, // По умолчанию перенаправляет на страницу игр
  { path: '**', redirectTo: '/games', pathMatch: 'full' }, // Перенаправляет на страницу игр, если маршрут не существует
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }