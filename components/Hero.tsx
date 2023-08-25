"use client";

import { useContext } from "react";
import { AppContext } from "./AppContext";

import Separator from "./Separator";
import DomainSearch from "./DomainSearch";
import SelectLocationFromHome from "./SelectLocationFromHome";
import SelectLocationFromHome2 from "./SelectLocationFromHome2";
import SelectLocationFromHome3 from "./SelectLocationFromHome3";

export default function Hero({ continents }: any) {
  const { headerHeight }: any = useContext(AppContext);

  return (
    <div
      style={{ paddingTop: `calc(${headerHeight}px + 50px)` }}
      className='flex flex-col md:flex-row justify-between items-center h-[100vh] px-[50px] md:px-[70px] bg-heroGradient after:absolute after:w-[100%] after:h-[100%] after:top-0 after:-left-0 after:z-[-1] after:bg-heroGrid after:opacity-[0.2] after:invert-[1]'
    >
      <div className='relative flex flex-col items-center justify-center w-[100%] h-[auto] pb-[60px] md:pb-0 md:h-[100%] md:pr-[40px]'>
        <DomainSearch />
        <Separator text='Or' />
      </div>
      <div className='flex flex-col items-center justify-center w-[100%] h-[100%] pt-[20px] md:pt-[0] md:pl-[40px]'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display'>
            Find the <span className='text-primary'>best VPS hosting</span> for
            your next project
          </h1>
          <p className='max-w-3xl leading-7 md:leading-8 text-gray-600 m-6'>
            EDIS Global delivers Linux VPS hosting and Windows VPS hosting to
            leading VPN providers, security firms, payment providers, Forex- and
            Crypto traders, market observers, developers, activists and many
            more. Buy Cheap VPS Hosting and VPS Server here.
          </p>
        </div>

        {/* <SelectLocationFromHome continents={continents} /> */}
        <SelectLocationFromHome3 continents={continents} />
      </div>
    </div>
  );
}
