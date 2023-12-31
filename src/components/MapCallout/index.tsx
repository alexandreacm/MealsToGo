import React from "react";

import { CompactRestaurantInfo } from "../../components/CompactRestaurantInfo";

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
