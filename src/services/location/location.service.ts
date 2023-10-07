import camelize from "camelize";

import { locations } from "../../../functions/geocode/geocode.mock";

// fetch(input: string, {
//   method?: "GET" | "POST" | "PUT" | "DELETE",
//   mode?: "navigate" | "same-origin" | "no-cors" | "cors",
//   headers?: { [key: string ]: any }
// }): Promise<Response>

// export const locationRequest = (searchTerm) => {
//   return new Promise((resolve, reject) => {
//     const locationMock = locations[searchTerm];
//     if (!locationMock) {
//       reject("not found");
//     }
//     resolve(locationMock);
//   });
// };

export const locationRequest = (searchTerm: string) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-92344/us-central1/geocode?city=${searchTerm}`,
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  // console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
