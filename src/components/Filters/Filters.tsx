import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useAdverts } from "../../hooks";
import { priseList } from "./optionsPrise";
import {
  WrapperList,
  Label,
  Item,
  RangeInputWrapper,
  InputFrom,
  InputTo,
  Search,
} from "./Filters.styled";

interface CustomSelectOption {
  label: string;
  value: string;
}

interface FiltersProps {
  onSearch: (filters: object) => void;
}

const Filters: React.FC<FiltersProps> = ({ onSearch }) => {
  const [make, setMake] = useState<string | null>(null);
  const [price, setPrise] = useState<string | null>(null);
  const [minMileage, setMinMileage] = useState<number | null>(null);
  const [maxMileage, setMaxMileage] = useState<number | null>(null);
  const { adverts } = useAdverts();

  const handleChangeMake = (selectedOption: CustomSelectOption): void => {
    setMake(selectedOption.value);
  };

  const handleChangePrise = (selectedOption: CustomSelectOption): void => {
    setPrise(selectedOption.value);
  };

  const handleMinMileageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMinMileage(Number(event.target.value));
  };

  const handleMaxMileageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMaxMileage(Number(event.target.value));
  };

  const handleSearch = () => {
    const filters = {
      make,
      price,
      minMileage,
      maxMileage,
    };

    onSearch(filters);
  };

  const makeArray =
    adverts?.map((advert) => ({ label: advert.make, value: advert.make })) ||
    [];

  return (
    <WrapperList>
      <Item>
        <Label>Car brand</Label>
        <CustomSelect
          width={224}
          height={310}
          options={makeArray}
          placeholder="Enter the text"
          handleChange={handleChangeMake}
        />
      </Item>
      <Item>
        <Label>Price/ 1 hour</Label>
        <CustomSelect
          width={125}
          height={310}
          options={priseList}
          placeholder="To $"
          handleChange={handleChangePrise}
        />
      </Item>
      <Item>
        <Label>Сar mileage / km</Label>
        <RangeInputWrapper>
          <InputFrom
            type="number"
            placeholder="From"
            value={minMileage || ""}
            onChange={handleMinMileageChange}
          />
          <InputTo
            type="number"
            placeholder="To"
            value={maxMileage || ""}
            onChange={handleMaxMileageChange}
          />
        </RangeInputWrapper>
      </Item>
      <Item>
        <Search onClick={handleSearch}>Search</Search>
      </Item>
    </WrapperList>
  );
};

export default Filters;
