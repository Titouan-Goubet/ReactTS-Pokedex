import { apiSlice } from './apiSlice';

// eslint-disable-next-line import/prefer-default-export
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
