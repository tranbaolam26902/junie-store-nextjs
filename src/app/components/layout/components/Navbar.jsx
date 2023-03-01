'use client';
import { useEffect, useState } from 'react';

import icons from '@/assets/icons';

import Button from '../../Button';

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
    const [isClosing, setIsClosing] = useState(false);

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
                        role='button'
                        onClick={handleCloseMobileNavbar}
                    ></div>
                    <div
                        className={`fixed top-0 left-0 mr-12 max-w-[400px] h-screen bg-white opacity-100 cursor-auto ${
                            isClosing ? 'animate-slide-out' : 'animate-slide-in'
                        } `}
                    >
                        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, dolores!</h1>
                    </div>
                </>
            ) : null}
            <>
                <div className='hidden xl:flex flex-1 gap-x-4'>
                    <Button text className={`text-green ${NAVIGATION_BUTTON_ANIMATION}`}>
                        Mới
                    </Button>
                    <Button text className={NAVIGATION_BUTTON_ANIMATION}>
                        Bông tai
                    </Button>
                    <Button text className={NAVIGATION_BUTTON_ANIMATION}>
                        Dây chuyền
                    </Button>
                    <Button text className={NAVIGATION_BUTTON_ANIMATION}>
                        Vòng tay
                    </Button>
                    <Button text className={NAVIGATION_BUTTON_ANIMATION}>
                        Nhẫn
                    </Button>
                    <Button text className={`text-red ${NAVIGATION_BUTTON_ANIMATION}`}>
                        Sale
                    </Button>
                </div>
                {/* Mobile hamburger button */}
                <div className='flex xl:hidden flex-1 gap-x-4'>
                    <Button leftIcon={icons.menu} onClick={handleOpenMobileNavbar} />
                </div>
            </>
        </>
    );
}
