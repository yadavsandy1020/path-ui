// @ts-nocheck
export async function load({ params }) {
  const BASE_URL = process.env.BASE_URL;
  const res = await fetch(BASE_URL + `/cbcs/${params.slug}/${params.page}`);
  const data = await res.json();
  if (res.ok) {
    return {
      props: {
        data,
      },
    };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${page.params.slug}`),
  };
}
