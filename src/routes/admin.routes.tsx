import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/App/Home";
import { Details } from "../pages/App/Details";
import { New } from "../pages/App/NewDish";
import { Edit } from "../pages/App/Edit";
import { Profile } from "../pages/App/Profile";
import { SearchProvider } from "../hooks/Search";
import { DefaultLayout } from "../components/Layouts/DefaultLayout";
import { DishProvider } from "../hooks/Dish";

export function AdminRoutes() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<New />} path="/new" />
          <Route
            path="/edit/:id"
            element={
              <DishProvider>
                <Edit />
              </DishProvider>
            }
          />
          <Route
            path="/details/:id"
            element={
              <DishProvider>
                <Details />
              </DishProvider>
            }
          />
        </Route>
      </Routes>
    </SearchProvider>
  );
}
