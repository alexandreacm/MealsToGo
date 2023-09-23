import camelize from "camelize";

import { locations } from "./location.mock";

// fetch(input: string, {
//   method?: "GET" | "POST" | "PUT" | "DELETE",
//   mode?: "navigate" | "same-origin" | "no-cors" | "cors",
//   headers?: { [key: string ]: any }
// }): Promise<Response>

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
