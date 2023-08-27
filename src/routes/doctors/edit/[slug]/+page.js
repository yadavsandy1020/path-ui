// @ts-nocheck
import fetchData from "$lib/api";

export async function load({ params }) {
  // get doctor details from api page params
  try {
    const doctor = await fetchData(
      `http://localhost:8080/api/doctors/${params.slug}`
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
