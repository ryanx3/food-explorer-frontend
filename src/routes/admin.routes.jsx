import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { New } from "../pages/New";
import { Edit } from "../pages/Edit";
import { Profile } from "../pages/Profile";
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
