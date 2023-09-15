const url = 'https://aviasales-test-api.kata.academy/';
let id = null;

export const apiService = async () => {
  if (id === null) {
    const response = await fetch(`${url}search`);
    if (response.ok) {
      const body = await response.json();
      id = body.searchId;
    } else {
      throw new Error(`Error status ${response.status}`);
    }
  }

  const newResponse = await fetch(`${url}tickets?searchId=${id}`);
  if (newResponse.ok) {
    const data = await newResponse.json();
    return data;
  }
  throw new Error(`Error status ${newResponse.status}`);
};
export default apiService;
