import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 40px;
`;

export const Img = styled.img`
  width: 100%;
  height: 248px;
  margin-bottom: 14px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const TitleCar = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 8px;
`;

export const TitleCarModel = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--accentColor);
  margin-bottom: 8px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Border = styled.span`
  border-left: 1px solid var(--carCountry);
  height: 16px;
`;

export const Info = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--carCountry);
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);
  margin-bottom: 24px;
  margin-top: 14px;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--black);
  margin-bottom: 8px;
`;

export const TitleList = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--black);
  margin-top: 24px;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`;

export const Item = styled.li`
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 35px;
  color: var(--black);
  list-style: none;
  background-color: #f9f9f9;
`;

export const Btn = styled.button`
  padding: 12px, 50px, 12px, 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  background-color: var(--accentColor);
  color: var(--mainColor);
  width: 168px;
  height: 44px;
  border-radius: 12px;
  margin-top: 24px;
`;
