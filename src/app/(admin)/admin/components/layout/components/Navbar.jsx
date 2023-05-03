'use client';

// Third-party libs
import { useEffect, useState } from 'react';

// Asset files
import iconClose from '@/assets/icons/close.svg';
import iconMenu from '@/assets/icons/menu.svg';

// App's components
import Button from '~/app/components/Button';

const navItems = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
    },
    {
        name: 'Categories',
        path: '/admin/categories',
    },
    {
        name: 'Products',
        path: '/admin/products',
    },
    {
        name: 'Orders',
        path: '/admin/orders',
    },
    {
        name: 'Discount',
        path: '/admin/discounts',
    },
    {
        name: 'Blog',
        path: '/admin/blog',
    },
];

export default function Navbar() {
    // Component's states
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // Use to toggle animations

    // Component's event handlers
    const handleOpenMobileNavbar = () => {
        setIsClosing(false);
        setShowMobileNavbar(true);
    };
    const handleCloseMobileNavbar = () => {
        setIsClosing(true);
        setTimeout(() => setShowMobileNavbar(false), 200);
    };

    useEffect(() => {
        // Close mobile navigation when screen width >= 1280
        window.onresize = () => {
            if (window.innerWidth >= 1280) handleCloseMobileNavbar();
        };
    }, []);
    useEffect(() => {
        document.body.style.overflow = showMobileNavbar ? 'hidden' : 'overlay';
    }, [showMobileNavbar]);

    return (
        <div className='order-1 lg:order-2 lg:flex-1'>
            {showMobileNavbar ? (
                <>
                    <div
                        className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                            isClosing ? 'animate-fade-out' : 'animate-fade-in'
                        }`}
                        onClick={handleCloseMobileNavbar}
                    ></div>
                    <nav
                        className={`fixed top-0 left-0 bottom-0 z-50 overflow-y-auto no-scrollbar flex flex-col px-6 py-4 md:px-10 w-[80vw] max-w-[400px] h-screen bg-white ${
                            isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'
                        } `}
                    >
                        <Button
                            leftIcon={iconClose}
                            iconSize={16}
                            className='ml-[-8px]'
                            onClick={handleCloseMobileNavbar}
                        />
                        {navItems.map((navItem, index) => (
                            <Button
                                key={index}
                                href={navItem.path}
                                text
                                full
                                className='px-0 py-5 text-xl font-bold leading-[1.2] capitalize border-b border-gray'
                                onClick={handleCloseMobileNavbar}
                            >
                                {navItem.name}
                            </Button>
                        ))}
                    </nav>
                </>
            ) : null}
            <nav>
                <div className='hidden lg:flex flex-1 gap-x-4 ml-[-8px]'>
                    {navItems.map((navItem, index) => (
                        <Button
                            key={index}
                            href={navItem.path}
                            text
                            className='relative after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:ease-in-out after:duration-300 hover:after:scale-x-100 hover:after:origin-left'
                        >
                            {navItem.name}
                        </Button>
                    ))}
                </div>
                {/* Mobile hamburger button */}
                <div className='flex lg:hidden xl:flex-1 gap-x-4 ml-[-8px]'>
                    <Button leftIcon={iconMenu} onClick={handleOpenMobileNavbar} />
                </div>
            </nav>
        </div>
    );
}
