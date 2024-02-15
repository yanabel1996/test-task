export async function fetchData(SERVER_URL) {
  const res = await fetch(SERVER_URL);
  const data = await res.json();
  return data;
}
