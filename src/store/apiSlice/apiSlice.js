import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://apistaging.inclass.app' }),
  endpoints: (builder) => ({
    getSubjects: builder.query({
      query: () => 'api/v1/classes/1/subjects',
    }),
    getSubjectCourses: builder.mutation({
      query: ({ subject_id, pageNum, pageSize }) => ({
        url: `api/v1/courses_filtering?filter[subject_id]=${subject_id}&page[number]=${pageNum}&page[size]=${pageSize}`,
        method: 'GET',
      }),
    }),
    getCourses: builder.query({
      query: () => 'api/v1/courses',
    }),
  }),
});

export const { useGetSubjectsQuery, useGetSubjectCoursesMutation, useGetCoursesQuery } = coursesApi;