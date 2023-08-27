// @ts-nocheck
export async function load({ params }) {
  const res = await fetch(`http://localhost:8080/api/cbcs/${params.slug}`);
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
