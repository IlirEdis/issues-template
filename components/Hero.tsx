"use client";

import { useContext } from "react";
import { AppContext } from "./AppContext";

import SelectLocationFromHome from "./SelectLocationFromHome";
import SelectLocationFromHome2 from "./SelectLocationFromHome2";
import SelectLocationFromHome3 from "./SelectLocationFromHome3";

export default function Hero({ continents }: any) {
  const { headerHeight }: any = useContext(AppContext);

  return (
    <div
      style={{ paddingTop: `calc(${headerHeight}px + 50px)` }}
      className='flex justify-between items-center h-[100vh] px-[50px] md:px-[70px] bg-heroGradient after:absolute after:w-[100%] after:h-[100%] after:top-0 after:-left-0 after:z-[-1] after:bg-heroGrid after:opacity-[0.2] after:invert-[1]'
    >
      {/* <SelectLocationFromHome continents={continents} /> */}
      <SelectLocationFromHome2 continents={continents} />
    </div>
  );
}
