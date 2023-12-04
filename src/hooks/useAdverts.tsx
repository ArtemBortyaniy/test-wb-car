import { useSelector } from "react-redux";
import { selectAdverts } from "../redux/adverts/selectors";

export const useAdverts = () => {
  const adverts = useSelector(selectAdverts);

  return {
    adverts,
  };
};
