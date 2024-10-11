import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/App/Home";
import { Details } from "../pages/App/Details";
import { Profile } from "../pages/App/Profile";
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
