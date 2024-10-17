import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../layout/DefautltLayout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}