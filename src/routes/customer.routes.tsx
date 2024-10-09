import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { SearchProvider } from "../hooks/Search";
import { DefaultLayout } from "../components/Layouts/DefaultLayout";
import { DishProvider } from "../hooks/Dish";

export function CustomerRoutes() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route
            path="/details/:id"
            element={
              <DishProvider>
                <Details />
              </DishProvider>
            }
          />
          <Route path="*" exact={true} element={<Home />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}
