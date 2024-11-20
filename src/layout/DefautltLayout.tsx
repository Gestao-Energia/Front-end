import { Suspense } from "react";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import './defaultLayout.css'
import { Stack } from "@mui/material";

function DefaultLayout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Stack direction={'row'}>
          <SideBar />
          <main className="main-application">
            <div className="main-content">
              <Outlet />
            </div>
          </main>
        </Stack>
      </Suspense>
    </>
  );
}
export default DefaultLayout;