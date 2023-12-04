import styled from "@emotion/styled";

export const WrapperList = styled.ul`
  display: flex;
  gap: 18px;
  list-style: none;
  margin-bottom: 50px;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;

export const RangeInputWrapper = styled.div`
  display: flex;
`;

export const InputFrom = styled.input`
  padding-left: 24px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  color: black;
  width: 168px;
  height: 48px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const InputTo = styled.input`
  padding-left: 24px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background-color: #f7f7fb;
  color: black;
  width: 160px;
  height: 48px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const Search = styled.button`
  width: 136px;
  height: 48px;
  border-radius: 12px;
  background-color: #3470ff;
  font-size: 14px;
  color: white;
  font-weight: 600;
  line-height: 20px;
  margin-left: 18px;
  border: none;
  margin-top: auto;
`;
