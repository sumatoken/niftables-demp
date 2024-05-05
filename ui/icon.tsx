import React from 'react'
import HexLg from './icons/hex-lg.svg';
import HexMd from './icons/hex-md.svg';
import HexDashed from './icons/hex-dashed.svg';
import Vector from './icons/vector.svg';
import Stocks from './icons/stocks.svg';
import X from './icons/x.svg';
import Mail from './icons/mail.svg';
import Twitter from './icons/twitter.svg';
import Discord from './icons/discord.svg';
import Eclipse from './icons/eclipse.svg';
import MenuWhite from './icons/menu-white.svg';
import MenuBlack from './icons/menu-black.svg';
import Subtract from './icons/subtract.svg';
import Rocket from './icons/rocket.svg';
import InfinityIcon from './icons/infinity.svg';
import { cn } from '@shared/utils/cn';

export const icons = {
    'hex-lg': HexLg,
    'hex-md': HexMd,
    'hex-dashed': HexDashed,
    stocks: Stocks,
    vector: Vector,
    'menu-white': MenuWhite,
    'menu-black': MenuBlack,
    mail: Mail,
    twitter: Twitter,
    discord: Discord,
    eclipse: Eclipse,
    infinity: InfinityIcon,
    subtract: Subtract,
    rocket: Rocket,
    x: X,

} as const


type IconProps = {
    id: keyof typeof icons;
} & React.ComponentProps<'svg'>;

export default function Icon({ id, className, children, ...props }: IconProps) {
    const IconToRender = icons[id]

    return <IconToRender className={cn(className)} {...props}>
        {children}
    </IconToRender>
}
