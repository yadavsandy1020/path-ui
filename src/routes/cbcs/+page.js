import fetchData from "$lib/api";

export async function load() {
  // get list of cbcs from api
  const BASE_URL = process.env.BASE_URL;
  try {
    const cbcs = await fetchData(BASE_URL + "/api/cbcs");
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
