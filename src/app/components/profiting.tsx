import Separator from '@ui/separator'
import Text from '@ui/text'
import Image from 'next/image'
import React from 'react'

export default function Profiting() {
    return (
        <section className='relative min-w-full min-h-screen flex flex-col items-center gap-12 md:gap-24'>
            <div className="w-11/12 md:min-w-full md:min-h-full p-0 md:px-[120px] lg:px-[240px] flex flex-col items-center">
                <div className="w-11/12 md:min-w-full md:min-h-full">
                    <Text font='MonumentExtendedRegular' className='text-[36px] md:text-[68px] z-50 leading-[110%] align-text-top uppercase'>
                        Profiting Through
                    </Text>
                    <Text font='MonumentExtendedRegular' className="text-[24px] md:text-[38px] z-30 text-left md:text-right uppercase bg-gradient-to-r from-blue from-0%  to-purple to-100% text-transparent bg-clip-text">
                        AI Innovation & Decentralization
                    </Text>
                </div>
            </div>
            <div className="flex items-center justify-center w-fit lg:w-[1440px] h-full lg:h-[485px] md:gap-[71px] lg:px-10 xl:px-20 2xl:px-0">
                <div className="hidden md:flex w-fit lg:w-[500px] xl:w-[947px] min-h-full">
                    <div className="relative min-w-full min-h-full">
                        <video autoPlay playsInline loop muted className='w-full h-full object-cover rounded-md'>
                            <source src='/videos/creon-logo.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                        <div className="min-w-full min-h-screen absolute top-0 z-10 bg-gradient-to-t from-black from-0% via-blue via-50% to-purple to-100% mix-blend-soft-light"></div>
                    </div>
                </div>
                <div className="h-full flex items-center gap-[30px] border-l border-r border-gray-line px-1 md:px-[30px]">
                    <div className="flex flex-col gap-7 w-[391px] px-4 md:px-[30px] md:py-0 ">
                        <Text font='SatoshiBold' className='text-[22px]'>
                            The dynamic community driven business model of the future.
                        </Text>
                        <Text font='SatoshiRegular' className='text-[18px]'>
                            At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    )
}
