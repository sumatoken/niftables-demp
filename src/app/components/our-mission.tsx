import Accordion from '@ui/accordion'
import Text from '@ui/text'
import Image from 'next/image'
import React from 'react'

export default function OurMission() {
    return (
        <section className='relative max-w-[100vw] min-h-screen px-10 md:px-[120px] lg:px-[140px] xl:px-[240px] flex flex-col md:flex-row gap-12 md:gap-24'>
            <div className="w-full md:w-1/2 flex flex-col">
                <div className="z-30 w-full">
                    <Text font='MonumentExtendedRegular' className='text-[18px] md:text-[30px] lg:text-[38px] uppercase'>
                        Our vision is to support the innovation of AI blockchain projects
                    </Text>
                    <Text font='MonumentExtendedRegular' className='inline text-[18px] md:text-[30px] lg:text-[38px] bg-gradient-to-r from-blue from-0%  to-purple to-100% text-transparent bg-clip-text uppercase'>
                        while prioritizing communities
                    </Text>
                </div>
                <div className="hidden md:block md:relative w-[836px] min-h-[502px] md:ml-0 2xl:ml-[119px]">
                    <Image src='/cron.png' width={836} height={502} quality={100} alt='NIFTABLES STONE LOGO' className='w-[836px] min-h-[502px] absolute md:inline top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />

                    <div className="absolute left-0 w-[282px] h-[502px] bg-gradient-to-r from-black from-0% to-black/0 to-100%">
                    </div>
                    <div className="absolute right-0 w-[282px] h-[502px] bg-gradient-to-l from-black from-0% to-black/0 to-100%">
                    </div>
                    <div className="absolute bottom-0 w-[836px] h-16 bg-gradient-to-t from-black from-0% to-black/0 to-100%">
                    </div>
                </div>
            </div>
            <div className="z-10 w-full md:w-1/2 h-full flex flex-col items-center justify-center  gap-[15px]">
                <Accordion iconId='stocks' title='Profitability and
Growth' description='At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
                />
                <Accordion iconId='subtract' title='Transparent & Fair Decentralized Earnings' description='At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
                />
                <Accordion iconId='rocket' title='Launching the
future' description='At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
                />
                <Accordion iconId='infinity' title='Limitless Possibilities of AI
& Crypto' description='At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.'
                />
            </div>
        </section >
    )
}
