import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ['User'],
        query: () => ({
          url: '/users',
          method: 'GET',
        }),
      }),
      addUser: builder.mutation({
        invalidatesTags: () => [{ type: 'User' }],
        query: () => ({
          url: '/users',
          method: 'POST',
          body: {
            name: faker.person.fullName(),
          },
        }),
      }),
      removeUser: builder.mutation({
        invalidatesTags: () => [{ type: 'User' }],
        query: (user) => ({
          url: `/users/${user.id}`,
          method: 'DELETE',
        }),
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } = usersApi;
export { usersApi };
