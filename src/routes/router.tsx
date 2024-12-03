import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefautltLayout";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import AccessControl from "../pages/AccessControl";
import Report from "../pages/Report";
import Monitoring from "../pages/Monitoring";
import Login from "../pages/Login/Login";
import { RegisterUserFormProvider } from "../contexts/registerUserContext";
import ReportDetails from "../pages/ReportDetails";

export default function Router() {
  return (
    <Routes>
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
        <Route path="/report" element={<Report />} />
        <Route path="/report/:reportId" element={<ReportDetails />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
