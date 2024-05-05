import Separator from '@ui/separator'
import Text from '@ui/text'
import Video from '@ui/video'
import React from 'react'

const VIDEO_ID = 'main-background-video-VvVCsw6hCfREJqkL2DYkyZ8HPCC3nT'

export default function Hero() {
    return (
        <section className='relative min-w-full min-h-screen'>
            <Video fileName={VIDEO_ID} autoPlay playsInline loop muted className='aspect-square md:aspect-auto  max-w-full h-[100vh] md:w-full md:h-full object-cover' />

            <div className="min-w-full min-h-screen absolute top-0 z-10 bg-gradient-to-t from-black from-0% via-blue via-50% to-purple to-100% mix-blend-soft-light"></div>
            <div className="z-10 absolute bottom-[102px] md:bottom-[102px] sm:bottom-[50px] flex flex-col px-5 md:px-[50px] lg:px-[100px] xl:px-[240px] gap-[30px]">
                <Text font='MonumentExtendedRegular' className='text-[32px] md:text-[32px] lg:text-[38px] xl:text-[50px] 2xl:text-[68px] leading-[110%] uppercase h-auto'>
                    The world&apos;s first
                    platform for Tokenizing
                    AI blockchain projects
                </Text>
                <div className="z-20 border-t-1 border-b-1 flex flex-col w-fit">
                    <Separator className="mb-[6px] bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100%" />
                    <Text font='SatoshiBold' className="w-auto h-[29px] text-[22px] align-middle bg-gradient-to-r from-[#3D6FFF] from-0%  to-[#9123FF] to-100% text-transparent bg-clip-text">
                        Hold the Creon Pass NFT and earn passive income from AI Tools
                    </Text>
                    <Separator className="mt-[11px] bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100%" />
                </div>
            </div>
        </section>
    )
}
