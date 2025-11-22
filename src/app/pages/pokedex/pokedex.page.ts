import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner,
  IonItem, IonLabel, IonSearchbar, IonButton, IonIcon, IonBadge,
  IonButtons, IonSegment, IonSegmentButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
}

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSpinner,
    IonItem, IonLabel, IonSearchbar, IonButton, IonIcon, IonBadge,
    IonButtons, IonSegment, IonSegmentButton
  ]
})
export class PokedexPage implements OnInit {
  private router = inject(Router);

  allPokemons: Pokemon[] = [];
  filteredPokemons: Pokemon[] = [];
  searchTerm: string = '';
  sortBy: 'number' | 'name' = 'number';
  isLoading: boolean = true;
  showSortOptions: boolean = false;

  constructor() {}

  async ngOnInit() {
    await this.loadAllPokemons();
  }

  private async loadAllPokemons() {
    try {
      const promises = [];
      for (let i = 1; i <= 50; i++) {
        promises.push(this.fetchPokemon(i));
      }

      const results = await Promise.all(promises);
      this.allPokemons = results.filter((pokemon): pokemon is Pokemon => pokemon !== null);
      this.filteredPokemons = [...this.allPokemons];
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading Pokémon:', error);
      this.isLoading = false;
    }
  }

  private async fetchPokemon(id: number): Promise<Pokemon | null> {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork']?.front_default || data.sprites.front_default || 'assets/pokeball.svg',
        types: data.types.map((type: any) => type.type.name)
      };
    } catch (error) {
      console.error(`Error fetching Pokémon ${id}:`, error);
      return null;
    }
  }

  onSearch(event: any) {
    const value = event.detail?.value;
    this.searchTerm = typeof value === 'string' ? value.toLowerCase() : '';
    this.filterPokemons();
  }

  filterPokemons() {
    if (!this.searchTerm) {
      this.filteredPokemons = [...this.allPokemons];
    } else {
      this.filteredPokemons = this.allPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm) ||
        pokemon.id.toString().includes(this.searchTerm)
      );
    }
    this.sortPokemons();
  }

  toggleSortOptions() {
    this.showSortOptions = !this.showSortOptions;
  }

  onSortChange(event: any) {
    const value = event.detail?.value;
    if (value === 'number' || value === 'name') {
      this.sortBy = value;
      this.sortPokemons();
    }
  }

  sortPokemons() {
    this.filteredPokemons.sort((a, b) => {
      if (this.sortBy === 'number') {
        return a.id - b.id;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  viewPokemonDetail(pokemonId: number) {
    this.router.navigate(['/pokemon', pokemonId]);
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878', fire: '#F08030', water: '#6890F0', electric: '#F8D030',
      grass: '#78C850', ice: '#98D8D8', fighting: '#C03028', poison: '#A040A0',
      ground: '#E0C068', flying: '#A890F0', psychic: '#F85888', bug: '#A8B820',
      rock: '#B8A038', ghost: '#705898', dragon: '#7038F8', dark: '#705848',
      steel: '#B8B8D0', fairy: '#EE99AC'
    };
    return typeColors[type] || '#68A090';
  }

  capitalizeName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
