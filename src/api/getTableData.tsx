export async function getDummyData() {
  return fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((response) => {
      return response.json ? response.json() : response;
    })
    .catch((error) => {
      throw error;
    });
}
