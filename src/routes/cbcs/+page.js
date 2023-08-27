import fetchData from "$lib/api";

export async function load() {
  // get list of cbcs from api
  try {
    const cbcs = await fetchData("http://localhost:8080/api/cbcs");
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
