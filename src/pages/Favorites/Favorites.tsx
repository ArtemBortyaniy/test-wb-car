import React, { useEffect, useState, FC } from "react";
//components
import Filters from "../../components/Filters/Filters";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
//redux
import { useDispatch } from "react-redux";
import { advertsGetAll } from "../../redux/adverts/operations";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

interface FiltersType {
  make?: string;
  price?: string;
  minMileage?: number;
  maxMileage?: number;
}

interface AdvertsType {
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
}

const Favorites: FC = () => {
  const [filters, setFilters] = useState<FiltersType>({});
  const [adverts, setAdverts] = useState<AdvertsType[]>([]);
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  useEffect(() => {
    dispatch(advertsGetAll({ page: 1, limit: 34 }));
  }, [dispatch]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setAdverts(favorites);
  }, []);

  const handleSearch = (newFilters: object) => {
    setFilters(newFilters);
  };

  const applyFilters = (advertsToFilter: AdvertsType[]): AdvertsType[] => {
    return advertsToFilter.filter((advert) => {
      const makeMatch =
        !filters.make ||
        advert.make.toLowerCase() === filters.make.toLowerCase();
      const priceMatch =
        !filters.price ||
        parseFloat(advert.rentalPrice.slice(1)) <= parseFloat(filters.price);
      const minMileageMatch =
        !filters.minMileage || advert.mileage >= filters.minMileage;
      const maxMileageMatch =
        !filters.maxMileage || advert.mileage <= filters.maxMileage;

      return makeMatch && priceMatch && minMileageMatch && maxMileageMatch;
    });
  };

  const filteredAdverts = applyFilters(adverts);
  return (
    <div className="mainContainer">
      <Filters onSearch={handleSearch} />
      <AdvertsList adverts={filteredAdverts} />
    </div>
  );
};

export default Favorites;
