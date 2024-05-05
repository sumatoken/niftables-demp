'use client'

import React, { useState } from 'react'
import Icon, { icons } from '@ui/icon'
import { cn } from '@shared/utils/cn'
import Button from './button'
import Text from './text'

interface Props {
    title: string
    description: string
    iconId: keyof typeof icons
}

export default function Accordion({ title, description, iconId }: Props) {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(open => !open)
    }

    return (
        <Button variant='children' className='w-full group border-b border-gray-line pb-[30px]' onClick={toggle}>
            <div className={cn("w-full flex flex-col transition-all ease-in duration-300")}>
                {/**static div */}
                <div className="w-full flex items-start justify-between">
                    <div className="w-full flex items-center justify-start md:justify-between">
                        <div className="w-full flex items-center justify-start gap-8">
                            <div className="relative">
                                <Icon id="hex-dashed" />
                                <Icon
                                    id="hex-lg"
                                    className={cn("absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ease-in duration-300", open ? 'text-white' : 'text-gray-line')}
                                />
                                <Icon
                                    id="hex-md"
                                    className={cn("absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  text-gray-800 ease-in duration-300", open ? 'text-gray-line' : '')}
                                />
                                <Icon id={iconId} className="absolute z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
                            </div>
                            <Text font='SatoshiBold' className="transition-colors duration-300 ease-in-out group-hover:text-blue">{title}
                            </Text>
                        </div>
                        <Icon id='vector' role='open-accordion' className={cn("duration-300 ease-in-out group-hover:text-blue transform transition-transform", open ? "-scale-y-100" : "scale-y-100")} />
                    </div>
                </div>
                {/** the animated div */}
                <div className={cn("w-full flex items-center justify-start gap-8")}>
                    <div className='w-0 md:w-[125px]'>
                    </div>
                    <div className={cn('w-full pt-4 md:pt-0 transition-all ease-in-out duration-300 transform origin-top overflow-hidden', open ? 'scale-y-100 opacity-100 visible max-h-[100vh]' : 'scale-y-0 opacity-0 invisible max-h-0')}>
                        <Text font='SatoshiRegular'>
                            {description}
                        </Text>
                    </div>
                </div>
            </div >
        </Button>
    )
}
