import React from 'react'
import Text from './text'
import Icon from './icon'
import Link from 'next/link'
import AlphaLogo from './alpha-logo'

export default function Footer() {
    return (
        <footer className="w-full min-h-[84px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-4 md:py-0 px-[50px]  2xl:px-[240px]">
            <div className="flex items-center gap-[90px]">
                <Text font='SatoshiRegular' className='text-[16px]'>
                    © Creon 2023. All rights reserved.
                </Text>
                <div className="flex items-center gap-[10px]">
                    <Link href='#' className="relative group">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='mail' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-whte' />
                    </Link>
                    <Link href='#' className="relative group">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='discord' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-whte' />
                    </Link>
                    <Link href='#' className="relative group">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='twitter' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-whte' />
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <Text font='SatoshiRegular' className="text-[16px] align-top">
                    Powered by
                </Text>
                <AlphaLogo />
            </div>
        </footer>
    )
}
