// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get list of cbcs from api
  try {
    const cbcs = await fetchData(
      `http://localhost:8080/api/cbcs/${params.slug}`
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
