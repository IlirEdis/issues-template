"use client";

import React, { CSSProperties, useState } from "react";
import Select from "react-select";
import { usePathname, useRouter } from "next/navigation";

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

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function SelectLocationFromHome2({ continents }: any) {
  const router = useRouter();
  const currentRoute = usePathname();
  const [value, setValue] = useState<any>(null);

  const GroupedOptions = () => {
    return continents.map((continent: any) => {
      return {
        label: continent.attributes.Name,
        options: continent.attributes.server_locations1.data.map(
          (location: any) => {
            return {
              value: location.attributes.Slug,
              label: `${location.attributes.Country} - ${location.attributes.City}`,
            };
          }
        ),
      };
    });
  };

  // GroupedOptions();

  console.log("VALUE", value);

  const defaultRoute =
    currentRoute === "/" ? "" : currentRoute.replace(/^\/|\/$/g, "");

  // console.log("ROUTTEEE", defaultRoute);

  return (
    <Select
      className='min-w-[280px]'
      // onChange={NavigateOnSelect}
      onChange={(event) => {
        console.log("NEWWW VALL", event);
        setValue(currentRoute?.replace(/^\/|\/$/g, ""));
        router.push(`${event.value}`);
      }}
      defaultValue={value}
      // value={value}
      placeholder='Select / Search Location...'
      options={GroupedOptions()}
      formatGroupLabel={formatGroupLabel}
    />
  );
}
