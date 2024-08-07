import React from "react";
import Profile from "../../components/profile/Profile";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Cards />
      <Profile />
    </div>
  );
};

export default Home;
