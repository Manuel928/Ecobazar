import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Mainlayout = () => {
  return (
    <>
    <TopBar/>
      <Navbar />

      <main className="flex items-center justify-center px-[30px] lg:px-[100px] py-[50px] lg:py-[80px] min-h-[calc(100vh-200px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
