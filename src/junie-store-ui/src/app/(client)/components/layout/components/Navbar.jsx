'use client';

// Third-party libs
import { useEffect, useState } from 'react';

// Asset files
import iconClose from '@/assets/icons/close.svg';
import iconMenu from '@/assets/icons/menu.svg';

// App's components
import Button from '~/app/components/Button';

export default function Navbar() {
    // Component's constants
    const NAVIGATION_BUTTON_ANIMATION =
        'relative after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:ease-in-out after:duration-300 hover:after:scale-x-100 hover:after:origin-left';

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
        <>
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
                        <Button
                            href='/collections/new-in'
                            text
                            full
                            className='px-0 py-5 text-xl text-green font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_300ms_ease-in-out]'
                            onClick={handleCloseMobileNavbar}
                        >
                            Mới
                        </Button>
                        <Button
                            href='/collections/earrings'
                            text
                            full
                            className={`px-0 py-5 text-xl font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_400ms_ease-in-out]`}
                            onClick={handleCloseMobileNavbar}
                        >
                            Bông tai
                        </Button>
                        <Button
                            href='/collections/necklace'
                            text
                            full
                            className={`px-0 py-5 text-xl font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_500ms_ease-in-out]`}
                            onClick={handleCloseMobileNavbar}
                        >
                            Dây chuyền
                        </Button>
                        <Button
                            href='/collections/bracelet'
                            text
                            full
                            className={`px-0 py-5 text-xl font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_600ms_ease-in-out]`}
                            onClick={handleCloseMobileNavbar}
                        >
                            Vòng tay
                        </Button>
                        <Button
                            href='/collections/ring'
                            text
                            full
                            className={`px-0 py-5 text-xl font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_700ms_ease-in-out]`}
                            onClick={handleCloseMobileNavbar}
                        >
                            Nhẫn
                        </Button>
                        <Button
                            href='/collections/sale-outlet'
                            text
                            full
                            className={`px-0 py-5 text-xl text-red font-bold leading-[1.2] capitalize border-b border-gray transition-transform animate-[slide-fade-in-left_800ms_ease-in-out]`}
                            onClick={handleCloseMobileNavbar}
                        >
                            Sale
                        </Button>
                    </nav>
                </>
            ) : null}
            <>
                <nav className='hidden xl:flex flex-1 gap-x-4 ml-[-8px]'>
                    <Button href='/collections/new-in' text className={`${NAVIGATION_BUTTON_ANIMATION} text-green`}>
                        Mới
                    </Button>
                    <Button href='/collections/earrings' text className={NAVIGATION_BUTTON_ANIMATION}>
                        Bông tai
                    </Button>
                    <Button href='/collections/necklace' text className={NAVIGATION_BUTTON_ANIMATION}>
                        Dây chuyền
                    </Button>
                    <Button href='/collections/bracelet' text className={NAVIGATION_BUTTON_ANIMATION}>
                        Vòng tay
                    </Button>
                    <Button href='/collections/ring' text className={NAVIGATION_BUTTON_ANIMATION}>
                        Nhẫn
                    </Button>
                    <Button href='/collections/sale-outlet' text className={`${NAVIGATION_BUTTON_ANIMATION} text-red`}>
                        Sale
                    </Button>
                </nav>
                {/* Mobile hamburger button */}
                <div className='flex xl:hidden flex-1 gap-x-4 ml-[-8px]'>
                    <Button leftIcon={iconMenu} onClick={handleOpenMobileNavbar} />
                </div>
            </>
        </>
    );
}
