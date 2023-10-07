import camelize from "camelize";
import { host } from "../../utils/env";

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
  return fetch(`https://geocode-${host}/geocode?city=${searchTerm}`).then(
    (res) => {
      return res.json();
    },
  );
};

export const locationTransform = (result) => {
  // console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
