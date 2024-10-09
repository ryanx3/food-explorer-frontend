import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { SearchProvider } from "../hooks/Search";
import { Details } from "../pages/Details";
import { DishProvider } from "../hooks/Dish";
import { DefaultLayout } from "../components/Layouts/DefaultLayout";

export function AuthRoutes() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>

          <Route element={<Home />} path="/" />
          <Route
            path="/details/:id"
            element={
              <DishProvider>
                <Details />
              </DishProvider>
            }
          />
        </Route>
        <Route element={<SignIn />} path="/login" />
        <Route element={<SignUp />} path="/register" />
        <Route path="*" exact={true} element={<Home />} />
        
      </Routes>
    </SearchProvider>
  );
}
