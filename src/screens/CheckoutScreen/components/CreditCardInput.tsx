import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardInput = ({ name, onSuccess, onError }) => {
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

    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(information);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };

  return <LiteCreditCardInput onChange={onChange} />;
};
