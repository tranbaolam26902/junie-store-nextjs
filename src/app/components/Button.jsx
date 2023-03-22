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
        'px-9 font-bold text-center uppercase tracking-[2px] leading-8 bg-accent rounded transition ease-in-out duration-300 hover:bg-[#edd501]';
    const secondaryStyle =
        'px-9 font-bold text-white text-center uppercase tracking-[2px] leading-8 bg-black rounded transition ease-in-out duration-300 hover:bg-secondary';
    const textStyle = 'font-semibold uppercase tracking-wider';
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
            className={`p-2 w-fit text-sm ${accent ? accentStyle : ''} ${secondary ? secondaryStyle : ''} ${
                text ? textStyle : ''
            } ${leftIcon || rightIcon ? iconStyle : ''} ${full ? 'w-full' : ''} ${className ? className : ''}`}
            {...props}
        >
            {leftIcon ? <Image src={leftIcon} width={iconSize} height={iconSize} alt='icon-button' /> : ''}
            <div className='inline-block pt-1'>{children}</div>
            {rightIcon ? <Image src={rightIcon} width={iconSize} height={iconSize} alt='icon-button' /> : ''}
        </Component>
    );
}

export default Button;
