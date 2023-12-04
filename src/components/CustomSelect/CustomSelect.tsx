import React, { useState } from "react";
import Select from "react-select";
import { black, filtersBG, carCountry, mainColor } from "../../helpers/colors";
import Icon from "../Icon/Icon";

interface CustomSelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  width: number;
  height: number;
  options: CustomSelectOption[] | number[];
  placeholder: string;
  handleChange: (selectedOption: any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  width,
  height,
  options,
  placeholder,
  handleChange,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: filtersBG,
      borderRadius: "14px",
      width: width,
      height: 48,
      color: black,
      paddingLeft: 18,
      paddingTop: 5,
      paddingBottom: 5,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected ? "white" : "white",
      color: state.isSelected ? "black" : "rgba(18, 20, 23, 0.20)",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "14px",
      width: width,
      maxHeight: height,
      paddingLeft: "18px",
      paddingTop: "14px",
      paddingBottom: "14px",
      paddingRight: "8px",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }),
    menuList: (provided: any) => ({
      ...provided,
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: carCountry,
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: mainColor,
        borderRadius: "10px",
      },
    }),
  };

  const formattedOptions =
    typeof options[0] === "number"
      ? (options as number[]).map((number) => ({
          label: `${number}`,
          value: `${number}`,
        }))
      : (options as CustomSelectOption[]);

  return (
    <div>
      <Select
        options={formattedOptions}
        onChange={handleChange}
        styles={customStyles}
        placeholder={placeholder}
        onMenuOpen={() => setDropdownOpen(true)}
        onMenuClose={() => setDropdownOpen(false)}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => (
            <Icon
              name="icon-chevron-down"
              className={`chevron-down${isDropdownOpen ? "-reversed" : ""}`}
            />
          ),
        }}
      />
    </div>
  );
};

export default CustomSelect;
