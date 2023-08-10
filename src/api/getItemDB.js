export async function getItemDB() {
  try {
    const response = await fetch(process.env.REACT_APP_ITEMDB_URL);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
}
