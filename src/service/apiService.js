const url = 'https://aviasales-test-api.kata.academy/';
let id = null;

export const apiService = async () => {
  if (id === null) {
    const response = await fetch(`${url}search`);
    if (response.ok) {
      const body = await response.json();
      id = body.searchId;
    } else {
      throw new Error(`Failed to fetch ${url}search`);
    }
  }

  const newResponse = await fetch(`${url}tickets?searchId=${id}`);
  if (newResponse.ok) {
    const data = await newResponse.json();
    return data;
  }
  throw new Error(`Failed to fetch ${url}tickets`);
};

export default apiService;
