import fetchData from "$lib/api";

export async function load() {
  // get list of doctors from api
  try {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const patients = await fetchData(BASE_URL + "/patients");
    return {
      body: {
        patients,
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
