import Image from "next/image";
import styles from "./page.module.css";

import { getClient } from "@/lib/apolloClient";
import { CONTINENTS, SERVER_LOCATIONS } from "@/data/Queries";
import Hero from "@/components/Hero";
import Container from "@/components/Container";

export const revalidate = 10;
const query = CONTINENTS;

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({ query });

  const continents = data.continents.data;

  // console.log("DATAAA", data.serverLocations.data);
  return (
    <main className='min-h-[100vh]'>
      <Hero continents={continents} />
      <Container>Other Content</Container>
    </main>
  );
}
