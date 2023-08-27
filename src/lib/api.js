// create function fetchData to get doctors from localhost /api/doctors endpoint

/**
 * @param {RequestInfo | URL | undefined} [url]
 */
export default async function fetchData(url) {
  // @ts-ignore
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
