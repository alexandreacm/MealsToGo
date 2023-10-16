import React, { useContext, useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components/native";

import { LocationContext } from "../../services/location/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

import { Search } from "./components/Search";
import { MapCallout } from "../../components/MapCallout";

const Map = styled(MapView)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

const RestaurantMap = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { width, height } = useWindowDimensions();

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        provider={PROVIDER_GOOGLE}
        width={width}
        height={height}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant) => {
          const lat = restaurant.geometry.location.lat;
          const lng = restaurant.geometry.location.lng;

          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: lat,
                longitude: lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
