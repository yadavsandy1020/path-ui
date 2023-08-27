// @ts-nocheck
export async function load({ params }) {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const res = await fetch(BASE_URL + `/doctors/${params.slug}`);
  const data = await res.json();
  console.log(data, params);
  if (res.ok) {
    return {
      props: {
        doctor: data,
      },
    };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${page.params.slug}`),
  };
}
