import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name = "Alexandre" }) => {
  const onChange = async (formData) => {
    const {
      values: { number, cvc, expiry },
      status,
    } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");

    const expMonth = expiry.split("/")[0];
    const expYear = expiry.split("/")[1];

    const information = {
      card: {
        number,
        exp_month: expMonth,
        exp_year: expYear,
        cvc,
        name,
      },
    };

    const info = await cardTokenRequest(information);
    if (!isIncomplete) {
      console.log(isIncomplete);
      console.log(info?.id);
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
