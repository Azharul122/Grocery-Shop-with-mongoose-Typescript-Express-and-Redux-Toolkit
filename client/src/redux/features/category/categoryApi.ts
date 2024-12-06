import { Category } from "../../../types";
import { baseApi } from "../../api/baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchCategory: builder.query<Category[], void>({
      query: () => "/category",
      providesTags: ["category"],
    }),
  }),
});

export const { useFetchCategoryQuery } = categoryApi;
