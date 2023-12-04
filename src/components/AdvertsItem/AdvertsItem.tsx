import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import ModalInfo from "../ModalInfo/ModalInfo";
import {
  Item,
  Img,
  TitleWrapper,
  Text,
  Info,
  LearnMore,
} from "./AdvertsItem.styled";
import Icon from "../Icon/Icon";

interface AdvertsItemProps {
  data: {
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
  };
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

const AdvertsItem: React.FC<AdvertsItemProps> = ({
  data,
  isFavorited,
  onToggleFavorite,
}) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const replace = (): JSX.Element => {
    const replacedString = `${data.model} | id :${data.id} | ${data.rentalCompany} | Type: ${data.type} | Year: ${data.year} | Fuel consumption ${data.fuelConsumption} | Engine size: ${data.engineSize}`;

    const finalString = replacedString.replace(/,/g, " | ");

    return <Info>{finalString}</Info>;
  };

  return (
    <Item>
      <Img src={data.img || "path/to/fallback-image.jpg"} />
      <span onClick={onToggleFavorite}>
        <Icon
          name="icon-heart"
          className={`heart ${isFavorited ? "favorited" : ""}`}
        />
      </span>
      <TitleWrapper>
        <Text>{`${data.make}, ${data.year}`}</Text>
        <Text>{data.rentalPrice}</Text>
      </TitleWrapper>
      {replace()}
      <LearnMore onClick={toggleModal}>Learn more</LearnMore>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalInfo data={data} />
        </Modal>
      )}
    </Item>
  );
};

export default AdvertsItem;
