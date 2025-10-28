import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Footer";
import TopBar from "../components/TopBar";

const Mainlayout = () => {
  return (
    <>
    <TopBar/>
      <Navbar />

      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
