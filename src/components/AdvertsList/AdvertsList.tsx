import React, { FC, useEffect, useState } from "react";
import AdvertsItem from "../AdvertsItem/AdvertsItem";
import { List } from "./AdvertsList.styled";

interface AdvertsListProps {
  adverts: {
    id: number;
    year: number;
    make: string;
    model: string;
    type: string;
    img: string;
    description: string;
    fuelConsumption: string;
    engineSize: string;
    accessories: string[];
    functionalities: string[];
    rentalPrice: string;
    rentalCompany: string;
    address: string;
    rentalConditions: string;
    mileage: number;
  }[];
}

interface TypeId {
  id: number;
}

const AdvertsList: FC<AdvertsListProps> = ({ adverts }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites.map((fav: TypeId) => fav.id));
  }, []);

  const handleToggleFavorite = (id: number) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);

    const updatedFavoritesData = adverts.filter((item) =>
      updatedFavorites.includes(item.id)
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavoritesData));
  };
  return (
    <List>
      {adverts?.map((item) => {
        return (
          <AdvertsItem
            data={item}
            key={item.id}
            isFavorited={favorites.includes(item.id)}
            onToggleFavorite={() => handleToggleFavorite(item.id)}
          />
        );
      })}
    </List>
  );
};

export default AdvertsList;
