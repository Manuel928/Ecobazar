import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import PopularCategories from "../../components/popularCategories/PopularCategories";

const Home = () => {
  

  return (
    <div>
      <Hero />
      <PopularCategories/>
    </div>
  );
};

export default Home;
