import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => ({ type: 'Photo', id: photo.id }));
          tags.push({ type: 'AlbumPhoto', id: album.id });
          return tags;
        },
        query: (album) => ({
          url: '/photos',
          method: 'GET',
          params: { albumId: album.id },
        }),
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => [{ type: 'AlbumPhoto', id: album.id }],
        query: (album) => ({
          url: '/photos',
          method: 'POST',
          body: {
            albumId: album.id,
            url: faker.image.urlLoremFlickr({ width: 150, height: 150, category: 'abstract', randomize: true }),
          },
        }),
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => [{ type: 'Photo', id: photo.id }],
        query: (photo) => ({
          url: `/photos/${photo.id}`,
          method: 'DELETE',
        }),
      }),
    };
  },
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };
