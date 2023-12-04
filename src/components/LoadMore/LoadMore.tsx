import React, { FC } from "react";
import { Wrapper, ButtonPagination } from "./LoadMore.syled";

interface LoadMoreProps {
  onClick: () => void;
}

const LoadMore: FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={() => onClick()}>
      <ButtonPagination>Load more</ButtonPagination>
    </Wrapper>
  );
};

export default LoadMore;
