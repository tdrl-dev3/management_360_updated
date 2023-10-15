import React, { useRef } from "react";
import Head from "next/head";
import ApiIntregration from "@/components/ApiIntregration";
import BulkImport from "@/components/BulkImport";
import FooterArea from "@/components/FooterArea";
import HeroArea from "@/components/HeroArea";
import Management360 from "@/components/Management360";
import Navbar from "@/components/Navbar";
import RequestDemo from "@/components/RequestDemo";
import SingleSolution from "@/components/SingleSolution";
import TaxCalculation from "@/components/TaxCalculation";
import Platform from "@/components/Platform";
import Customization from "@/components/Customization";

export default function Home() {
  const requestDemo = useRef(null);

  const goToDemo = () => {
    window.scrollTo({
      top: requestDemo.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      <Head>
        <title>Management 360 - Accounting System</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Navbar goToDemo={goToDemo} />
        <HeroArea goToDemo={goToDemo} />
        <SingleSolution />
        <Management360 />
        <BulkImport />
        <TaxCalculation />
        <Customization />
        <ApiIntregration />
        <Platform />
        <RequestDemo requestDemo={requestDemo} />
        <FooterArea />
      </main>
    </div>
  );
}
