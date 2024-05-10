import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Profile } from '../pages/Profile'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Details />} path="/details/:id" />
      <Route element={<Profile />} path="/profile" />
      {/* <Route element={<New />} path="/new" /> */}
      <Route element={<Edit />} path="/edit/:id" />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}