import React, { FC } from "react";
import {
  Wrapper,
  Img,
  TitleWrapper,
  TitleCar,
  TitleCarModel,
  InfoWrapper,
  Info,
  Text,
  Title,
  TitleList,
  List,
  Item,
  Btn,
} from "./Modal.styled";
import { accentColor } from "../../helpers/colors";
import { formatMileage } from "./formatMileage";
import { AdvertsModalProps } from "./type";

const ModalInfo: FC<AdvertsModalProps> = ({ data }) => {
  const carAddress = `${data.address} , id: ${data.id} , Type: ${data.type}`;

  const carTTH = `Fuel Consumption: ${data.fuelConsumption} , Engine Size: ${data.engineSize}`;

  const joinArray = (array: string[]): string => {
    return array.join(" | ");
  };

  const replaced = (string: string): string => {
    return string.replace(/,/g, " | ");
  };

  const rentalConditionsItems = data.rentalConditions
    .split("\n")
    .map((condition, index) => (
      <Item key={index}>
        {condition.split("").map((char, charIndex) =>
          isNaN(Number(char)) ? (
            <span key={charIndex}>{char}</span>
          ) : (
            <span key={charIndex} style={{ color: accentColor }}>
              {char}
            </span>
          )
        )}
      </Item>
    ));

  return (
    <Wrapper>
      <Img src={data.img} />
      <TitleWrapper>
        <TitleCar>{data.make}</TitleCar>
        &nbsp;
        <TitleCarModel>{data.model},</TitleCarModel>
        &nbsp;
        <TitleCar>{data.year}</TitleCar>
      </TitleWrapper>
      <InfoWrapper>
        <Info>{replaced(carAddress)}</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>{replaced(carTTH)}</Info>
      </InfoWrapper>
      <Text>{data.description}</Text>
      <Title>Accessories and functionalities:</Title>
      <InfoWrapper>
        <Info>{joinArray(data.accessories)}</Info>
      </InfoWrapper>
      <InfoWrapper>
        <Info>{joinArray(data.functionalities)}</Info>
      </InfoWrapper>
      <TitleList>Rental Conditions: </TitleList>
      <List>
        {rentalConditionsItems}
        <Item>Minimum age: {formatMileage(data.mileage)}</Item>
        <Item>
          Price: <span style={{ color: accentColor }}>{data.rentalPrice}</span>
        </Item>
      </List>
      <Btn>Rental car</Btn>
    </Wrapper>
  );
};

export default ModalInfo;
