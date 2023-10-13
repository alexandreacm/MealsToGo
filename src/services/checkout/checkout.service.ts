import createStripe from "stripe-client";
import { host, tokenStripe } from "../../utils/env";

const stripe = createStripe(tokenStripe);

export const cardTokenRequest = (informationCard) =>
  stripe.createToken(informationCard);

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    method: "POST",
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong processing the payment");
    }
    return res.json();
  });
};
