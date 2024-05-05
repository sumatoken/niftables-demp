import React from 'react'
import Icon, { icons } from './icon'
import { cn } from '@shared/utils/cn'
import Text from './text'

const variants = {
    outline: 'outline outline-2 outline-white rounded-md',
    icon: 'flex items-center justify-center p-1',
    default: 'text-center group',
    children: 'rounded-md'
}


type Props = {
    variant: keyof typeof variants,
    iconId?: keyof typeof icons
} & React.ComponentProps<'button'>

export default function Button({ variant = 'default', className, children, ...props }: Props) {
    if (variant === 'icon') {
        const { iconId } = props as { variant: 'icon'; iconId: keyof typeof icons };
        return (
            <button {...props} className={cn(variants[variant], className)}>
                <Icon id={iconId} width={12} height={6} />
            </button>
        );
    } else if (variant === 'children') {
        return (<button className={cn(variants[variant], className)}  {...props}>
            {children}
        </button>)
    } else if (variant === 'outline') {
        return (
            <button className={cn('min-w-[132px] h-11 overflow-hidden text-center group', variants[variant], 'hover:bg-blue hover:outline-blue transition-all duration-300 ease-in', className,)}>
                <div className='h-inherit group-hover:-translate-y-[100%] transition-all duration-300 ease-in'>
                    <div className="h-inherit flex items-center justify-center">
                        <Text font='SatoshiBold' className="text-center leading-[110%]">
                            {children}
                        </Text>
                    </div>
                    <div className="h-inherit flex items-center justify-center">
                        <Text font='SatoshiBold' className="text-center leading-[110%]">
                            {children}
                        </Text>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <button className={cn(variants[variant], className)} {...props}>
            {children}
        </button>
    )
}