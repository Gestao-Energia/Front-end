import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../layout/DefautltLayout";
import Login from "../pages/Login/Login";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>
      <Route path="/login" element={<Login />}/>
    </Routes>
  )
}