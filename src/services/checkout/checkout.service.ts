import createStripe from "stripe-client";
import { tokenStripe } from "../../utils/env";

const stripe = createStripe(tokenStripe);

export const cardTokenRequest = (informationCard) =>
  stripe.createToken(informationCard);
