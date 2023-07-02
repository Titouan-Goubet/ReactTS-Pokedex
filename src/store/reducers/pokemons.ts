import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { Pokemon } from '../../@types/pokemon';

interface PokemonsState {
  list: Pokemon[];
  isLoading: boolean;
}

export const initialState: PokemonsState = {
  list: [],
  isLoading: true,
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
    });
});

export default pokemonsReducer;
