import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import DeveloperInfo from '../developerInfo';

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
      <DeveloperInfo/>
    </>
  );
};

export default Homepage;
