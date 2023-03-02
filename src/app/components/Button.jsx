'use client';

import Image from 'next/image';
import Link from 'next/link';

function Button({
    href,
    leftIcon,
    rightIcon,
    iconSize,
    accent,
    secondary,
    text,
    full,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const accentStyle =
        'px-9 font-bold bg-accent uppercase tracking-[2px] leading-8 rounded transition ease-in-out duration-300 hover:bg-[#edd501]';
    const secondaryStyle =
        'px-9 font-bold text-white bg-black uppercase tracking-[2px] leading-8 rounded transition ease-in-out duration-300 hover:bg-secondary';
    const textStyle = 'uppercase tracking-wider';
    const iconStyle = 'flex items-center justify-center';
    const props = {
        onClick,
        ...passProps,
    };

    if (href) {
        props.href = href;
        Component = Link;
    }

    return (
        <Component
            className={`p-2 w-fit text-sm font-semibold ${accent ? accentStyle : ''} ${
                secondary ? secondaryStyle : ''
            } ${text ? textStyle : ''} ${leftIcon || rightIcon ? iconStyle : ''} ${full ? 'w-full' : ''} ${
                className ? className : ''
            }`}
            {...props}
        >
            {leftIcon ? <Image src={leftIcon} width={iconSize} height={iconSize} alt='icon-button' /> : ''}
            <span className='inline-block pt-1'>{children}</span>
            {rightIcon ? <Image src={rightIcon} width={iconSize} height={iconSize} alt='icon-button' /> : ''}
        </Component>
    );
}

export default Button;
