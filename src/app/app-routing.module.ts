import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: 'game', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', redirectTo: 'game' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
