import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterUserFormProvider } from "../contexts/registerUserContext";
import DefaultLayout from "../layout/DefautltLayout";
import AccessControl from "../pages/AccessControl";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login/Login";
import Monitoring from "../pages/Monitoring";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Report from "../pages/Report";
import ReportDetails from "../pages/ReportDetails";
import PrivateRoute from "./PrivateRoute";
import UploadFiles from "../pages/Upload";

export default function Router() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/register"
            element={
              <RegisterUserFormProvider>
                <Register />
              </RegisterUserFormProvider>
            }
          />
          <Route path="/accessControl" element={<AccessControl />} />
          <Route path="/accessControl/profile/:id" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report/:reportId" element={<ReportDetails />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<UploadFiles />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
