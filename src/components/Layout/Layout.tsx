import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header, Logo, NavList, Link, ItemLink } from "./Layout.styled";

const Layout: React.FC = () => {
  return (
    <div className="mainContainer">
      <Header>
        <Logo href="/">Logo</Logo>
        <nav>
          <NavList>
            <ItemLink>
              <Link to="/">Home</Link>
            </ItemLink>
            <ItemLink>
              <Link to="/catalog">Catalog</Link>
            </ItemLink>
            <ItemLink>
              <Link to="/favorites">Favorites</Link>
            </ItemLink>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </div>
  );
};

export default Layout;
