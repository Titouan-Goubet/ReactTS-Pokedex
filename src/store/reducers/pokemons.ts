import {
  createAsyncThunk,
  createReducer,
  createAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from '../../@types/pokemon';

interface PokemonsState {
  list: Pokemon[];
  isLoading: boolean;
  searchValue: string;
}

export const initialState: PokemonsState = {
  list: [],
  isLoading: true,
  searchValue: '',
};

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async () => {
    const { data: pokemons } = await axios.get<Pokemon[]>(
      'https://api-pokemon-fr.vercel.app/api/v1/pokemon'
    );
    const slicedPokemons = pokemons;
    return slicedPokemons;
  }
);

export const fetchPokemonByName = createAsyncThunk(
  'pokemons/fetchPokemonById',
  async (slug: string) => {
    const { data: pokemon } = await axios.get<Pokemon[]>(
      `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${slug}`
    );
    return pokemon;
  }
);

export const updateSearchValue = createAction<string>(
  'pokemons/updateSearchValue'
);

const pokemonsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPokemons.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPokemons.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPokemons.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(updateSearchValue, (state, action) => {
      state.searchValue = action.payload;
    });
});

export default pokemonsReducer;
