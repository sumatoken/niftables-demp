import Button from '@ui/button'
import Separator from '@ui/separator'
import Text from '@ui/text'
import Video from '@ui/video'
import React from 'react'

const Ellipse = ({ className }: { className: string }) => {
    return (<svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_23_2)">
            <ellipse cx="404" cy="808" rx="644" ry="67" fill="black" />
        </g>
        <g filter="url(#filter1_f_23_2)">
            <path d="M1048 0C1048 -14.301 980.346 -28.018 859.88 -38.1415C739.415 -48.265 575.977 -53.9682 405.424 -53.9999C234.872 -54.0315 71.135 -48.389 -49.8634 -38.3102C-170.862 -28.2315 -239.239 -14.5397 -239.994 -0.238883C-240.748 14.062 -173.818 27.8039 -53.8879 37.972C66.0423 48.1401 229.178 53.9039 399.727 53.9988C570.276 54.0937 734.309 48.512 855.838 38.4782C977.367 28.4445 1046.47 14.7782 1047.97 0.477761L404 0H1048Z" fill="black" />
        </g>
        <g filter="url(#filter2_f_23_2)">
            <ellipse cx="808" cy="404" rx="404" ry="85" transform="rotate(-90 808 404)" fill="black" />
        </g>
        <g filter="url(#filter3_f_23_2)">
            <ellipse cx="-2.40061e-06" cy="404" rx="404" ry="85" transform="rotate(-90 -2.40061e-06 404)" fill="black" />
        </g>
        <defs>
            <filter id="filter0_f_23_2" x="-300" y="681" width="1408" height="254" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_23_2" />
            </filter>
            <filter id="filter1_f_23_2" x="-300" y="-114" width="1408" height="228" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_23_2" />
            </filter>
            <filter id="filter2_f_23_2" x="673" y="-50" width="270" height="908" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_23_2" />
            </filter>
            <filter id="filter3_f_23_2" x="-135" y="-50" width="270" height="908" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_23_2" />
            </filter>
        </defs>
    </svg>



    )
}

export default function CreonPass() {
    return (
        <section className='relative min-w-full min-h-screen px-[50px] 2xl:pl-[284px] 2xl:pr-[3px] flex items-center gap-24'>
            <div className="w-full 2xl:w-[700px] flex flex-col items-start justify-start gap-[40px]">
                <div className="w-full flex flex-col items-center justify-start gap-[30px]">
                    <Text font="MonumentExtendedRegular" className="text-[68px] leading-[110%] align-top uppercase">
                        creon pass nft
                    </Text>
                    <Separator />
                    <Text font='SatoshiBold' className="text-[22px] w-auto align-middle bg-gradient-to-r from-[#3D6FFF] from-0%  to-[#9123FF] to-100% text-transparent bg-clip-text">
                        The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
                    </Text>
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px]">
                    <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-[11px] pb-4">
                        <Text font='SatoshiRegular' className="text-[18px]">
                            Pre-launch investment opportunities for upcoming AI projects
                        </Text>
                    </div>
                    <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-[15px]">
                        <Text font='SatoshiRegular' className="text-[18px]">
                            Free and early access to Creon built AI projects
                        </Text>
                    </div>
                    <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-4">
                        <Text font='SatoshiRegular' className="text-[18px]">
                            Higher allocation limits on the Creon AI Launchpad
                        </Text>
                    </div>
                    <div className="w-full md:w-fit border border-gray-line rounded-md px-[18px] pt-3 pb-4">
                        <Text font='SatoshiRegular' className="text-[18px]">
                            Revenue share distribution from Creon built AI projects
                        </Text>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-[70px]">
                    <Button
                        variant="default"
                        className='w-full md:min-w-[432px] h-11 rounded-md overflow-hidden text-center group bg-gradient-to-r from-[#3D6FFF] from-0% to-[#9123FF] to-100% bg-size-double-x hover:bg-size-double-x-hover'
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
            <div className="hidden lg:block relative size-[808px] items-center justify-center">
                <Video fileName='nft-video-mQvVrZPzmeS5MnLrOI2IYmtUp6jbQg' autoPlay playsInline loop muted className='w-full h-full object-cover rounded-md' />
                <div className="min-w-full md:min-h-screen absolute top-0 z-10 bg-gradient-to-t from-blue/[44%] from-0% to-purple to-100% mix-blend-soft-light"></div>
                <Ellipse className="z-10 absolute top-0 w-full aspect-[1/2]" />
            </div>
        </section>
    )
}
