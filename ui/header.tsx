'use client'

import React, { useEffect, useRef, useState } from 'react'
import Logo from './logo'
import Text from './text'
import Badge from './badge'
import Button from './button'
import Link from 'next/link'
import { cn } from '@shared/utils/cn'
import Icon from './icon'
import Separator from './separator'

const items = [{
    title: 'Creon Pass',
    href: '#',
}, {
    title: 'Token',
    href: '#',
    comingSoon: true,
},
{
    title: 'AI Revenue',
    href: '#',
    comingSoon: true,
},
{
    title: 'AI Launchpad',
    href: '#',
    comingSoon: true,
},
]

const MobileMenu = () => {

    const [open, setOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null);

    const toggle = () => {
        setOpen(prev => !prev)
    }

    useEffect(() => {
        if (!open) return

        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            if (navRef.current && !navRef.current.contains(target)) {
                toggle()
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <>
            <nav className={cn("w-full md:hidden fixed right-0 top-0 z-10 px-[30px] py-5 opacity-100 transition-all ease-in duration-500", !open ? "translate-x-0 flex items-center justify-end " : "translate-x-full")}>
                <Button variant='default' onClick={toggle} className={cn('relative rounded-md h-[38px] w-[38px] align-end flex items-center justify-center transition-all duration-300 ease-in', open ? 'hidden' : 'hover:bg-blue')}>
                    <Icon id='menu-white' className={cn('absolute  z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  transition-all duration-700 ease-in', !open ? 'w-5 h-[14px]' : 'hidden')} />
                </Button>
            </nav>
            <div className={cn("fixed left-0  w-screen h-screen md:hidden flex items-start justify-start px-[30px] py-5 transition-all ease-in duration-700", open ? 'backdrop-blur-sm' : "h-0")}>
                <Link href="#">
                    <Logo />
                </Link>
            </div>
            <nav ref={navRef} className={cn("z-[100] fixed right-0 top-0 w-[208px] flex h-screen md:hidden flex-col justify-between pl-[30px] py-5 bg-black transform transition-transform duration-700 ease-in-out", open ? "translate-x-0" : "translate-x-full")}>
                <div className="flex flex-col items-between gap-[30px]">
                    <div className="min-w-[163px] flex items-center justify-start gap-[15px]">
                        <Button variant='outline' className='min-w-[110px] h-[38px]'>Connect</Button>
                        <Button variant='default' onClick={toggle} className={cn('relative rounded-md h-[38px] w-[38px] flex items-center justify-center transition-all duration-700 ease-in', open ? 'bg-blue' : 'bg-white hover:bg-blue')}>
                            <Icon id='x' className={cn('absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  transition-all duration-700 ease-in text-green-500', open ? 'h-3 w-3 opacity-100' : 'opacity-0 ')} />
                        </Button>
                    </div>
                    <div className="w-full  flex flex-col items-start gap-[18px]">
                        {items.map((item) => (
                            <div key={item.title} className="w-full flex flex-col items-start gap-[15px]">
                                <Separator />
                                <div className="flex items-center gap-1"> <Link href={item.href} className='w-fit' aria-disabled>
                                    <Text font="SatoshiBold" className={cn("w-fit text-[16px] leading-[110%] align-top transition-all ease-in-out duration-300", !item.comingSoon ? 'hover:text-blue' : '')}>
                                        {item.title}
                                    </Text>
                                </Link>
                                    {item.comingSoon && <Badge title='soon' className='align-start text-[#AB23FF] bg-black text-[10px]' />}
                                </div>
                            </div>
                        ))}
                        <Separator />
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <Link href='#' className="relative group w-[34px] h-[34px]">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='mail' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
                    </Link>
                    <Link href='#' className="relative group w-[34px] h-[34px]">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='discord' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
                    </Link>
                    <Link href='#' className="relative group w-[34px] h-[34px]">
                        <Icon id='eclipse' className='fill-black group-hover:fill-blue group-hover:text-blue transition-all ease-in duration-300'>
                        </Icon>
                        <Icon id='twitter' className='absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default function Header() {
    return (
        <>
            <header className="absolute top-0 z-50 w-full">
                <nav className='hidden md:flex md:fixed md:top-0 w-full items-center justify-between px-[50px] py-[30px] backdrop-blur bg-gradient-to-t from-transparent to-purple/20'>
                    <Link href='#'>
                        <Logo />
                    </Link>
                    <div className="flex items center gap-[40px]">
                        <div className="flex items-center gap-[40px]">
                            {items.map((item) => (
                                <div key={item.title} className="flex items-center gap-1">
                                    <Link href={item.href} aria-disabled>
                                        <Text font="SatoshiBold" className={cn("w-auto text-[18px] leading-[110%] align-top transition-all ease-in-out duration-300", !item.comingSoon ? 'hover:text-blue' : '')}>
                                            {item.title}
                                        </Text>
                                    </Link>
                                    {item.comingSoon && <Badge title='soon' className='self-start bg-black text-purple' />}
                                </div>
                            ))}
                        </div>
                        <Button variant='outline'>Connect</Button>
                    </div>
                </nav>
                <MobileMenu />
            </header>
        </>
    )
}
