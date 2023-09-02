// @ts-ignore
import fetchData from "$lib/api";

// @ts-ignore
export async function load({ params }) {
  // get list of cbcs from api
  try {
    // @ts-ignore
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const cbcs = await fetchData(BASE_URL + `/cbcs/${params.slug}`);
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
