"use client";

import { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { SERVER_LOCATIONS } from "@/data/Queries";
// import { getClient } from "@/lib/apolloClient";

// export const revalidate = 10;
// const query = SERVER_LOCATIONS;

export default function SelectLocationFromHome({ continents }: any) {
  const router = useRouter();
  const currentRoute = usePathname();

  // console.log("CURRNET ROUTE", currentRoute);
  //   const client = getClient();
  //   const { data } = await client.query({ query });

  //   const serverLocations = data.serverLocations.data;

  console.log("CURENT ROUTE", currentRoute.replace(/^\/|\/$/g, ""));

  return (
    <Select.Root value={currentRoute.replace(/^\/|\/$/g, "")}>
      <Select.Trigger
        className='inline-flex items-center justify-center rounded-md p-[25px] text-[13px] leading-none h-[35px] min-w-[280px] gap-[5px] bg-white shadow-[0_0_0_2px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-primary data-[placeholder]:text-violet9 outline-none'
        aria-label='Server Locations'
      >
        <Select.Value placeholder='Select a country…' />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className='mt-[90px] z-50 overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
          <Select.ScrollUpButton className='flex items-center justify-center h-[25px] bg-white cursor-default'>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className='p-[5px]'>
            {continents.map((continent: any) => {
              //   console.log("CONTINENT", continent);
              return (
                <Select.Group key={continent.id}>
                  <Select.Label className='px-[25px] text-xs leading-[25px] text-primary font-semibold'>
                    {continent.attributes.Name}
                  </Select.Label>
                  <Select.Separator className='h-[1px] bg-slate-200 m-[5px]' />

                  {continent.attributes.server_locations1.data.map(
                    (location: any) => {
                      // console.log("SLUGGG", location.attributes.Slug);
                      return (
                        <SelectItem
                          value={location.attributes.Slug}
                          key={location.id}
                        >
                          <Link href={location.attributes.Slug}>
                            {`${location.attributes.Country} - ${location.attributes.City}`}
                          </Link>
                        </SelectItem>
                      );
                    }
                  )}
                </Select.Group>
              );
            })}

            <Select.Separator className='h-[1px] bg-violet6 m-[5px]' />
          </Select.Viewport>
          <Select.ScrollDownButton className='flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default'>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className='absolute left-0 w-[25px] inline-flex items-center justify-center'>
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
