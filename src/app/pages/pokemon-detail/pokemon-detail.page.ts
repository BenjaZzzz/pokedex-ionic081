import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid,
  IonRow, IonCol, IonChip, IonProgressBar, IonBackButton, IonText,
  IonButtons, IonSpinner } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';

interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  types: string[];
  weight: number;
  height: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
  description: string;
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [IonSpinner,
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid,
    IonRow, IonCol, IonChip, IonProgressBar, IonBackButton, IonText,
    IonButtons
  ]
})
export class PokemonDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  pokemon: PokemonDetail | null = null;
  isLoading: boolean = true;

  constructor() {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      if (!isNaN(id)) {
        this.loadPokemon(id);
      }
    });
  }

  async loadPokemon(id: number) {
    try {
      this.isLoading = true;

      const [pokemonData, pokemonSpecies] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json())
      ]);

      const description = this.getEnglishFlavorText(pokemonSpecies);

      this.pokemon = {
        id: pokemonData.id,
        name: this.capitalizeName(pokemonData.name),
        image: pokemonData.sprites.other?.['official-artwork']?.front_default || pokemonData.sprites.front_default || 'assets/pokeball.svg',
        types: pokemonData.types.map((type: any) => type.type.name),
        weight: pokemonData.weight / 10,
        height: pokemonData.height / 10,
        abilities: pokemonData.abilities.slice(0, 3).map((ability: any) => ability.ability.name),
        stats: [
          { name: 'HP', value: pokemonData.stats[0]?.base_stat || 0 },
          { name: 'ATK', value: pokemonData.stats[1]?.base_stat || 0 },
          { name: 'DEF', value: pokemonData.stats[2]?.base_stat || 0 },
          { name: 'SP. ATK', value: pokemonData.stats[3]?.base_stat || 0 },
          { name: 'SP. DEF', value: pokemonData.stats[4]?.base_stat || 0 },
          { name: 'SPEED', value: pokemonData.stats[5]?.base_stat || 0 }
        ],
        description
      };

    } catch (error) {
      console.error('Error loading Pokémon details:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private getEnglishFlavorText(pokemonSpecies: any): string {
    if (!pokemonSpecies?.flavor_text_entries) {
      return 'No description available.';
    }

    for (let entry of pokemonSpecies.flavor_text_entries) {
      if (entry.language?.name === 'en') {
        return entry.flavor_text?.replace(/\f/g, ' ') || 'No description available.';
      }
    }
    return 'No description available.';
  }

  private capitalizeName(name: string): string {
    if (!name) return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  navigateToPokemon(id: number) {
    this.router.navigate(['/pokemon', id]);
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

  getMainColor(): string {
    if (!this.pokemon || !this.pokemon.types.length) return '#dc0a2d';
    return this.getTypeColor(this.pokemon.types[0]);
  }

  // Agrega este método en la clase PokemonDetailPage
formatPokemonId(id: number | undefined): string {
  if (!id) return '000';
  return id.toString().padStart(3, '0');
}
}
