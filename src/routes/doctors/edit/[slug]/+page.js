// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get doctor details from api page params
  try {
    const BASE_URL = process.env.BASE_URL;
    const doctor = await fetchData(
      BASE_URL + `/doctors/${params.slug}/${params.page}`
    );
    return {
      doctor,
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
