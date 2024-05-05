import React from 'react'
import LogoSVG from './icons/logo.svg'
import { cn } from '@shared/utils/cn'

export default function Logo({ className, ...props }: React.ComponentProps<'svg'>) {
    return (
        <LogoSVG className={cn(className)} {...props} />
    )
}
