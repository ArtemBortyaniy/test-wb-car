import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Logo = styled.a`
  text-decoration: none;
  color: var(--accentColor);
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const ItemLink = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--accentColor);
  font-weight: 500;
  font-size: 30px;
  cursor: pointer;
  &.active {
    color: var(--black);
  }
`;
