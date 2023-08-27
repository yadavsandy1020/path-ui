// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get patient details from api page params
  try {
    const patient = await fetchData(
      `http://localhost:8080/api/patients/${params.slug}`
    );
    return {
      body: {
        patient,
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
