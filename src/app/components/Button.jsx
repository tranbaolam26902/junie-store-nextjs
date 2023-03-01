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
    fluid,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Component = 'button';
    const accentStyle =
        'relative px-9 font-bold bg-accent uppercase tracking-wide leading-[48px] rounded-sm ease-in-out duration-300 hover:bg-[#edd501]';
    const secondaryStyle = 'px-9 font-bold text-white bg-black uppercase tracking-wide leading-[48px] rounded-sm';
    const textStyle = 'p-2 pt-2 uppercase tracking-wide';
    const iconStyle = 'flex items-center justify-center p-2 pt-2 gap-x-1';
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
            className={`inline-block pt-1 text-sm text-center font-semibold ${accent ? accentStyle : null} ${
                secondary ? secondaryStyle : null
            } ${text ? textStyle : null} ${leftIcon || rightIcon ? iconStyle : null} ${fluid ? 'w-full' : null} ${
                className ? className : null
            }`}
            {...props}
        >
            {leftIcon ? <Image src={leftIcon} width={iconSize} height={iconSize} alt='icon-button' /> : null}
            {children}
            {rightIcon ? <Image src={rightIcon} width={iconSize} height={iconSize} alt='icon-button' /> : null}
        </Component>
    );
}

export default Button;