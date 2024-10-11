import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/Auth/SignIn";
import { SignUp } from "../pages/Auth/SignOut";
import { Home } from "../pages/App/Home";
import { SearchProvider } from "../hooks/Search";
import { Details } from "../pages/App/Details";
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
