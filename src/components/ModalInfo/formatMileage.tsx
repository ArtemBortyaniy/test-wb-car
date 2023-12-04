import { accentColor } from "../../helpers/colors";

export const formatMileage = (mileage: number): JSX.Element => {
  const mileageString = mileage.toString();
  const digitCount = mileageString.length;

  if (digitCount === 4) {
    return (
      <span style={{ color: accentColor }}>{`${
        mileageString[0]
      },${mileageString.slice(1)}`}</span>
    );
  } else if (digitCount === 5) {
    return (
      <span style={{ color: accentColor }}>{`${mileageString.slice(
        0,
        2
      )},${mileageString.slice(2)}`}</span>
    );
  } else if (digitCount === 6) {
    return (
      <span style={{ color: accentColor }}>{`${mileageString.slice(
        0,
        3
      )},${mileageString.slice(3)}`}</span>
    );
  } else if (digitCount === 7) {
    return (
      <span style={{ color: accentColor }}>{`${mileageString.slice(
        0,
        4
      )},${mileageString.slice(4)}`}</span>
    );
  } else {
    return <span>{mileageString}</span>;
  }
};
