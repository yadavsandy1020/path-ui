// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get list of cbcs from api
  try {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const cbcs = await fetchData(
      BASE_URL + `/cbcs/${params.slug}/${params.page}`
    );
    return {
      body: {
        cbcs,
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: {
        // @ts-ignore
        error: error.message,
      },
    };
  }
}
