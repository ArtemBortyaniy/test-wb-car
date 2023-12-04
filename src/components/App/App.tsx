import React, { lazy, FC } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/Home/Home"));
const CatalogPage = lazy(() => import("../../pages/Catalog/Catalog"));
const FavoritesPage = lazy(() => import("../../pages/Favorites/Favorites"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default App;
