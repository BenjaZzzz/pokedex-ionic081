import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex',  // Redirige al Pokedex por defecto
    pathMatch: 'full'
  },
  {
    path: 'pokedex',
    loadComponent: () => import('./pages/pokedex/pokedex.page').then(m => m.PokedexPage)
  },
  {
    path: 'pokemon/:id',
    loadComponent: () => import('./pages/pokemon-detail/pokemon-detail.page').then(m => m.PokemonDetailPage)
  }
  // Si tienes home, debería estar aquí también
];
