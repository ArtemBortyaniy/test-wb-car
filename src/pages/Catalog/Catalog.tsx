import React, { useEffect, useState, FC } from "react";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
//components
import Filters from "../../components/Filters/Filters";
import AdvertsList from "../../components/AdvertsList/AdvertsList";
import LoadMore from "../../components/LoadMore/LoadMore";
//redux
import { useDispatch } from "react-redux";
import { advertsGetAll } from "../../redux/adverts/operations";
import { useAdverts } from "../../hooks";

interface FiltersType {
  make?: string;
  price?: string;
  minMileage?: number;
  maxMileage?: number;
}

interface adverts {
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

const Catalog: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<FiltersType>({});
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const { adverts } = useAdverts();

  useEffect(() => {
    dispatch(advertsGetAll({ page, limit: 10 }));
  }, [dispatch, page]);

  const incrementPage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (newFilters: object) => {
    setFilters(newFilters);
  };

  const applyFilters = (advertsToFilter: adverts[]): adverts[] => {
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
      {adverts.length && <LoadMore onClick={incrementPage} />}
    </div>
  );
};

export default Catalog;
