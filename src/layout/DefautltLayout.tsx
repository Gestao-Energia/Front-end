import { Suspense } from "react";
import Loader from "../components/Loader";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefaultLayout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="flex">
          <SideBar />
          <div className="w-full">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </div>
      </Suspense>
    </>
  );
}
export default DefaultLayout;