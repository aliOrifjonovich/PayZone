import { Button, Container } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fakeActions } from "redux/fake/fake.slice";
import Games from "Components/UI/Games/Games";
import { t } from "i18next";
import Advertisement from "Components/UI/Advertisement/Advertisement";
import MarqueeElem from "Components/UI/Marquee/Marquee";
import Players from "Components/UI/Players/Players";
import Testimonials from "Components/UI/Testimonials/Testimonials";
import FAQ from "Components/UI/FAQ/FAQ";

const Main = () => {
  const { fakeData } = useSelector((store) => store.fake);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="main_wrapper">
      <Games />
      <div className="little_about">
        <Advertisement />
      </div>
      <MarqueeElem />
      <Players />
      <Testimonials/>
      <MarqueeElem />
      <FAQ/>
    </div>
  );
};

export default Main;
