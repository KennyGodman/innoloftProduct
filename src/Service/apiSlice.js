import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_API;


export  const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/product/6781/",
            providesTags:["Products"]
        }),
        updateProduct: builder.mutation({
            query: (prod) => ({
                url:`/product/${prod.id}`,
                method:"PUT",
                body:prod
            }),
            invalidatesTags:["Products"]
        })
    }),
});

export const { useGetAllProductsQuery, useUpdateProductMutation } = productsApi;