// "use client";

import Container from "@/components/Container";
import SelectLocationFromHome from "@/components/SelectLocationFromHome";
import SelectLocationFromHome2 from "@/components/SelectLocationFromHome2";
import SelectLocationFromHome3 from "@/components/SelectLocationFromHome3";
import {
  CONTINENTS,
  SERVER_LOCATIONS,
  SINGLE_LOCATION_DATA,
} from "@/data/Queries";
import { getClient } from "@/lib/apolloClient";

export const revalidate = 10;
const query = SERVER_LOCATIONS;
const query2 = SINGLE_LOCATION_DATA;
const selectData = CONTINENTS;

export const dynamicParams = true;

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({ query });

  const continents = data.serverLocations.data;

  return continents.map((continent: any) => ({
    serverLocation: continent.attributes.Slug,
  }));
}

export default async function SingleLocation({ params }: any) {
  const { serverLocation } = params;

  // console.log("PARAMSS", serverLocation);

  const client = getClient();

  const { data } = await client.query({
    query: query2,
    variables: {
      TheSlug: serverLocation,
    },
  });

  const { data: selectCountries } = await client.query({ query: selectData });

  const continents = selectCountries.continents.data;

  // console.log("DATAAA", data.serverLocations.data);
  return (
    <main className='min-h-[100vh] pt-[100px]'>
      <Container>
        <p>{data?.serverLocations.data[0]?.attributes.Country}</p>
        <p>{data?.serverLocations.data[0]?.attributes.City}</p>
        <SelectLocationFromHome2 continents={continents} />
      </Container>
    </main>
  );
}
