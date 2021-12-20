export const getJsonFromSearch = (search: string, key: string): any =>  {
  search = search.substr(1);
  const data = new URLSearchParams(search);
  return data.get(key)
}