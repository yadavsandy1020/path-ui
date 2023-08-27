// @ts-nocheck
export async function load({ params }) {
  const res = await fetch(`http://localhost:8080/api/doctors/${params.slug}`);
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
