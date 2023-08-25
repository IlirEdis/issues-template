"use client";

import React, { CSSProperties, useState } from "react";
import Select from "react-select";
import { usePathname, useRouter } from "next/navigation";

// import { SERVER_LOCATIONS } from "@/data/Queries";
// import { getClient } from "@/lib/apolloClient";

// export const revalidate = 10;
// const query = SERVER_LOCATIONS;

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function SelectLocationFromHome2({ continents }: any) {
  const router = useRouter();
  const currentRoute = usePathname();
  const [value, setValue] = useState<StateOption | null>();

  const GroupedOptions = () => {
    return continents.map((continent) => {
      return {
        label: continent.attributes.Name,
        options: continent.attributes.server_locations1.data.map((location) => {
          return {
            value: location.attributes.Slug,
            label: `${location.attributes.Country} - ${location.attributes.City}`,
          };
        }),
      };
    });
  };

  const NavigateOnSelect = (e: any) => {
    router.push(`${e.value}`);
  };

  // GroupedOptions();

  // console.log("CURRNET ROUTE", currentRoute);
  //   const client = getClient();
  //   const { data } = await client.query({ query });

  //   const serverLocations = data.serverLocations.data;

  console.log("VALUE", value);

  const defaultRoute =
    currentRoute === "/" ? "" : currentRoute.replace(/^\/|\/$/g, "");

  // console.log("ROUTTEEE", defaultRoute);

  return (
    <Select
      className='min-w-[280px]'
      // onChange={NavigateOnSelect}
      onChange={(newValue) => {
        console.log("NEWWW VALL", newValue);
        setValue(currentRoute.replace(/^\/|\/$/g, ""));
        router.push(`${newValue.value}`);
      }}
      defaultValue={value}
      // value={value}
      placeholder='Select / Search Location...'
      options={GroupedOptions()}
      formatGroupLabel={formatGroupLabel}
      styles={{
        control: (base, state) => ({
          ...base,
          borderRadius: "6px",
          borderColor: state.menuIsOpen ? "rgb(80 188 80)" : "rgb(209 213 219)",
          ":hover": {
            borderColor: state.menuIsOpen
              ? "rgb(80 188 80)"
              : "rgb(209 213 219)",
          },
          boxShadow: "none",
        }),
        valueContainer: (base) => ({
          ...base,
          padding: "10px 15px",
        }),
        placeholder: (base) => ({
          ...base,
          fontSize: 16,
        }),
      }}
    />
  );
}
