'use client';

import { useEffect, useState } from 'react';

import iconClose from '@/assets/icons/close.svg';
import iconMenu from '@/assets/icons/menu.svg';

import Button from '../../Button';

/**
 * Temporary
 */
const pages = [
    {
        name: 'Mới',
        path: '/',
        color: 'green',
    },
    {
        name: 'Bông tai',
        path: '/',
    },
    {
        name: 'Dây chuyền',
        path: '/',
    },
    {
        name: 'Vòng tay',
        path: '/',
    },
    {
        name: 'Nhẫn',
        path: '/',
    },
    {
        name: 'Sale',
        path: '/',
        color: 'red',
    },
];

export default function Navbar() {
    /**
     * Component's constants
     */
    const NAVIGATION_BUTTON_ANIMATION =
        'relative after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:ease-in-out after:duration-300 hover:after:scale-x-100 hover:after:origin-left';

    /**
     * Component's states
     */
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // Use to toggle animations

    /**
     * Component's event handlers
     */
    const handleOpenMobileNavbar = () => {
        setIsClosing(false);
        setShowMobileNavbar(true);
    };
    const handleCloseMobileNavbar = () => {
        setIsClosing(true);
        setTimeout(() => setShowMobileNavbar(false), 500);
    };

    useEffect(() => {
        /**
         * Close mobile navigation when screen width >= 1280
         */
        window.onresize = () => {
            if (window.innerWidth >= 1280) handleCloseMobileNavbar();
        };
    }, []);

    return (
        <>
            {showMobileNavbar ? (
                <>
                    <div
                        className={`fixed top-0 left-0 w-screen h-screen bg-black/[.3] transition-all ${
                            isClosing ? 'animate-fade-out' : 'animate-fade-in'
                        }`}
                        onClick={handleCloseMobileNavbar}
                    ></div>
                    <div
                        className={`fixed flex flex-col top-0 left-0 p-4 md:px-8 w-[80vw] max-w-[400px] h-screen bg-white ${
                            isClosing ? 'animate-slide-out' : 'animate-slide-in'
                        } `}
                    >
                        <Button leftIcon={iconClose} iconSize={32} className='w-8' onClick={handleCloseMobileNavbar} />
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                href={page.path}
                                text
                                className={`flex justify-start pt-[20px] py-5 text-xl text-${page.color} font-bold leading-[1.2] capitalize border-b border-gray`}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </div>
                </>
            ) : null}
            <>
                <div className='hidden xl:flex flex-1 gap-x-4 ml-[-8px]'>
                    {pages.map((page, index) => (
                        <Button
                            key={index}
                            href={page.path}
                            text
                            className={`text-${page.color} ${NAVIGATION_BUTTON_ANIMATION}`}
                        >
                            {page.name}
                        </Button>
                    ))}
                </div>
                {/* Mobile hamburger button */}
                <div className='flex xl:hidden flex-1 gap-x-4 ml-[-8px]'>
                    <Button leftIcon={iconMenu} onClick={handleOpenMobileNavbar} />
                </div>
            </>
        </>
    );
}
