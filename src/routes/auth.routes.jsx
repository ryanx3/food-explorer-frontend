import { Routes, Route, Navigate } from "react-router-dom";

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return(
    <Routes>
      <Route element={<SignIn/>} path="/"/>
      <Route element={<SignUp/>} path="/register"/>

     {/* <Route path="*" element={<Navigate to="/"/>}/> */}
    </Routes>
  )
}