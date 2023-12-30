import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home'
import { DishDetails } from '../pages/DishDetails'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AppRoutes() {
  return(
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<DishDetails/>} path="/details"/>
      <Route element={<New/>} path="/new"/>
      <Route element={<Edit/>} path="/edit"/>
      <Route element={<SignIn/>} path="/login"/>
      <Route element={<SignUp/>} path="/register"/>

      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}