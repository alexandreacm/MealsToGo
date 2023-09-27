import React, { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext({});
export const useFavoriteContext = () => useContext(FavoritesContext);

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId,
    );

    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
