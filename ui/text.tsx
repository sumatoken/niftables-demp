import { fonts } from '@/app/fonts';
import { cn } from '@shared/utils/cn';
import React from 'react'

type Props = {
    font: keyof typeof fonts
} & React.ComponentProps<'p'>;

export default function Text({ children, font, className, ...props }: Props) {
    return (
        <p {...props} className={cn('text-left leading-[130%] tracking-normal', fonts[font].className, className)}>{children}
        </p>
    )
}
