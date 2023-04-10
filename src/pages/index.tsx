import Head from "next/head";
// import styles from '@/styles/Home.module.css'

import Navigation from "@/components/shared/Navigation";
import Web from "@/components/web/Web";
import Data from "@/components/shared/Data";
import Dev from "@/components/shared/Dev";
import Footer from "@/components/shared/Footer";

// Utils
import { initializeIcons } from "@fluentui/font-icons-mdl2";




export default function Home() {
  initializeIcons();

  
  return (
    <>
      <Head>
        <title>Lebenslauf Lars Eschweiler</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Web/>

      <Data />

      <Dev />

      <Footer />
    </>
  );
}
