// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get patient details from api page params
  try {
    const BASE_URL = process.env.BASE_URL;
    const patient = await fetchData(
      BASE_URL + `/patients/${params.slug}/${params.page}`
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
