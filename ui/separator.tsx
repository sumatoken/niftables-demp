import { cn } from '@shared/utils/cn'
import React from 'react'

export default function Separator({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <hr role='separator' className={cn("h-[1px] min-w-full bg-gray-line", className)}></hr>
    )
}
