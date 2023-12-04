import styled from "@emotion/styled";

export const Item = styled.li`
  width: 274px;
  /* height: 426px; */
  list-style: none;
  position: relative;
  stroke: transparent;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 14px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
`;

export const Info = styled.p`
  color: var(--carCountry);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 28px;
`;

export const LearnMore = styled.button`
  width: 274px;
  height: 44px;
  padding: 12px, 99px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--mainColor);
  background-color: var(--accentColor);
  border: none;
  border-radius: 12px;
`;
