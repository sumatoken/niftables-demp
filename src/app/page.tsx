

import Accordion from "@ui/accordion";
import Badge from "@ui/badge";
import Button from "@ui/button";
import Card from "@ui/card";
import Footer from "@ui/footer";
import Header from "@ui/header";
import HorizontalCard from "@ui/horizontal-card";
import Logo from "@ui/logo";
import Separator from "@ui/separator";
import Text from "@ui/text";
import Hero from "./components/hero";
import CreonPass from "./components/creon-pass";
import Profiting from "./components/profiting";
import OurMission from "./components/our-mission";
import ComingSoon from "./components/coming-soon";
import Perks from "./components/perks";
import Image from "next/image";




export default function Home() {

  return (
    <main className="min-w-full flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden">
      <Header />
      <Hero />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <Perks />
      <Footer />
    </main >
  );
}


const coolstuff = () => {
  return (<>
    <Button
      variant="default"
      className='min-w-[432px] h-11 rounded-md overflow-hidden text-center group bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100% bg-size-double-x hover:bg-size-double-x-hover'
    >
      <div className='group-hover:-translate-y-[50%] transition-all duration-300 ease-in'>
        <div className="h-11 flex items-center justify-center">
          <Text font='SatoshiBold' className="text-center leading-[110%]">
            Buy Creon Pass
          </Text>
        </div>
        <div className="h-11 flex items-center justify-center">
          <Text font='SatoshiBold' className="text-center leading-[110%]">
            Buy Creon Pass
          </Text>
        </div>
      </div>
    </Button>
    <div className="border-t-1 border-b-1 flex flex-col">
      <Separator className="mb-[6px] bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100%" />
      <Text font='SatoshiBold' className="w-auto h-[29px] text-[22px] align-middle bg-gradient-to-r from-[#3D6FFF] from-0%  to-[#9123FF] to-100% text-transparent bg-clip-text">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </Text>
      <Separator className="mt-[11px] bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100%" />
    </div>
    <div className="w-full md:w-[700px] flex flex-col items-start justify-start gap-[40px]">
      <div className="w-full flex flex-col items-center justify-start gap-[30px]">
        <Text font="MonumentExtendedRegular" className="text-[68px] leading-[110%] align-top uppercase">
          creon pass nft
        </Text>
        <Separator />
        <Text font='SatoshiBold' className="text-[22px] w-auto align-middle bg-gradient-to-r from-[#3D6FFF] from-0%  to-[#9123FF] to-100% text-transparent bg-clip-text">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive
        </Text>
      </div>
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-4">
          <Text font='SatoshiRegular' className="text-[18px]">
            Pre-launch investment opportunities for upcoming AI projects
          </Text>
        </div>
        <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-4">
          <Text font='SatoshiRegular' className="text-[18px]">
            Pre-launch investment opportunities for upcoming AI projects
          </Text>
        </div>
        <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-4">
          <Text font='SatoshiRegular' className="text-[18px]">
            Pre-launch investment opportunities for upcoming AI projects
          </Text>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[70px]">
        <Button
          variant="default"
          className='min-w-[432px] h-11 rounded-md overflow-hidden text-center group bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100% bg-size-double-x hover:bg-size-double-x-hover'
        >
          <div className='group-hover:-translate-y-[50%] transition-all duration-300 ease-in'>
            <div className="h-11 flex items-center justify-center">
              <Text font='SatoshiBold' className="text-center leading-[110%]">
                Buy Creon Pass
              </Text>
            </div>
            <div className="h-11 flex items-center justify-center">
              <Text font='SatoshiBold' className="text-center leading-[110%]">
                Buy Creon Pass
              </Text>
            </div>
          </div>
        </Button>
      </div>
    </div>

    <Card title="revenue" subTitle="Empowering NFT Holders \n
and Shaping AI Development" description="The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation." imageSrc="/image-1.png" />
  </>)
}