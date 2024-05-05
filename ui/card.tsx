import React from 'react'
import Text from './text'
import Image from 'next/image'
import Badge from './badge'
import { cn } from '@shared/utils/cn'

type Props = {
    title: string,
    subTitle: string,
    description: string,
    imageSrc: string,
} & React.ComponentProps<'div'>

export default function Card({ title, subTitle, description, imageSrc, className }: Props) {
    return (
        <div className={cn("relative w-full md:w-[453px] min-h-[659px] flex flex-col items-start gap-[30px] rounded-md bg-gray-line/60", className)}>
            <Badge className='absolute  right-[30px] -top-[10px] h-[19px] bg-white text-black px-[6px] py-[3px]' title='coming soon' />
            <div className="w-full md:w-[410.5px] min-h-[149px] flex flex-col gap-[9px] px-[30px] pt-[30px]">
                <Text font='MonumentExtendedRegular' className='w-full h-11 leading-[120%] uppercase text-[38px]'>
                    {title}
                </Text>
                <Text font='SatoshiBold' className='w-[120%] text-[22px] bg-gradient-to-r from-[#3D6FFF] from-0%  to-[#9123FF] to-100% text-transparent bg-clip-text'>
                    {subTitle}
                </Text>
            </div>
            <div className="w-full flex flex-col gap-[33px]">
                <div className="w-full md:w-[423px] h-[234px] pr-[30px] group">
                    <div className="relative md:w-[423px] h-[234px] rounded-tr-lg rounded-bl-lg overflow-hidden">
                        <div className="absolute z-10 top-0 left-0 w-full h-full rounded-tr-lg rounded-bl-lg mix-blend-color bg-gradient-to-t from-[#3D6FFF] from-0%  to-[#9123FF] to-100%">
                        </div>
                        <Image src={imageSrc} alt={title} fill
                            className=' transform rounded-tr-lg rounded-bl-lg overflow-hidden mix-blend-normal group-hover:scale-110 transition-all duration-300 ease-out' />
                    </div>
                </div>
                <Text font='SatoshiRegular' className='text-[18px] px-[30.8px] text-lg'>
                    {description}
                </Text>
            </div>
        </div>
    )
}
