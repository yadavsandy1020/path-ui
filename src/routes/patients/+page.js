import fetchData from "$lib/api";

export async function load() {
  // get list of doctors from api
  try {
    const patients = await fetchData("http://localhost:8080/api/patients");
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
