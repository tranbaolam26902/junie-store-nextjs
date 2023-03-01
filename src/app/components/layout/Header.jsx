import Image from 'next/image';
import Link from 'next/link';

import images from '@/assets/images';

import Navbar from './components/Navbar';
import UserActions from './components/UserActions';

export default function Header() {
    return (
        <div className='fixed top-0 w-full bg-white drop-shadow'>
            <div className='flex items-center mx-auto px-6 md:px-10 h-[var(--header-height)]'>
                <Navbar />
                <Link href='/'>
                    <Image src={images.brandLogo} className='max-w-[80px]' alt='brand-logo' />
                </Link>
                <UserActions />
            </div>
        </div>
    );
}
