import React from 'react'
import Badge from './badge'
import Text from './text'
import Image from 'next/image'
import { cn } from '@shared/utils/cn'

type Props = {
    title: string,
    description: string,
    imageSrc: string,
} & React.ComponentProps<'div'>

export default function HorizontalCard({ title, description, imageSrc, className, ...props }: Props) {
    return (
        <div className={cn("w-full md:max-w-[1440px] md:min-h-[302px] md:max-h-[302px] flex flex-col md:flex-row-reverse  items-start justify-around gap-[30px] rounded-md bg-gray-line/60", className)}>
            <div className="relative min-w-full md:min-w-[453px] h-full rounded-tr-md rounded-br-md">
                <div className="absolute z-10 top-0 left-0 w-full h-full  mix-blend-overlay bg-gradient-to-t from-[#3D6FFF] from-0%  to-[#9123FF] to-100% rounded-tr-md rounded-br-md">
                </div>
                <div className="w-full h-full md:max-w-[453px] flex flex-col gap-[33px] bg-gray-line rounded-tr-md rounded-br-md">
                    <Image src={imageSrc} alt={title} width={453} height={302} quality={100} className='relative top-0 w-full h-full mix-blend-luminosity rounded-tr-md rounded-br-md' />
                </div>
            </div>
            <div className="w-full flex flex-col gap-4 px-4 py-4 md:gap-6 md:px-6 md:py-6 2xl:gap-[15px] 2xl:px-[40px] 2xl:py-[40px] h-full">
                <Text font='MonumentExtendedRegular' className='w-full leading-6 text-xl uppercase md:leading-8 md:text-2xl 2xl:leading-[120%] 2xl:text-[38px]'>
                    {title}
                </Text>
                <Text font='SatoshiRegular' className='text-base md:text-xl 2xl:text-[16px]'>
                    {description}
                </Text>
            </div>
        </div>
    )
}
