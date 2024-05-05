import React from 'react'
import Text from './text'
import { cn } from '@shared/utils/cn'

type Props = {
    title: string
} & React.ComponentProps<'span'>

export default function Badge({ title, className, ...props }: Props) {
    return (
        <span className={cn(' min-w-fit px-1 pt-[2px] pb-[1px] h-[14px] flex items-center justify-center gap-[10px]  text-[12px] rounded-[100px] bg-white', className)} {...props}>
            <Text font='SatoshiBold' className={cn('w-auto text-center leading-[110%] text-nowrap uppercase')}>{title}</Text>
        </span>
    )
}
