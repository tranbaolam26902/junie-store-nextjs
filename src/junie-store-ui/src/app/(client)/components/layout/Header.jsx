// Third-party libs
import Image from 'next/image';
import Link from 'next/link';

// Asset files
import brandLogo from '@/assets/images/brand-logo.jpg';

// App's components
import Navbar from './components/Navbar';
import UserActions from './components/UserActions';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 z-40 w-full bg-white drop-shadow'>
            <div className='flex items-center mx-auto px-6 md:px-10 max-w-screen-2xl h-[var(--header-height)]'>
                <Navbar />
                <Link href='/'>
                    <Image src={brandLogo} className='max-w-[80px]' alt='brand-logo' priority />
                </Link>
                <UserActions />
            </div>
        </header>
    );
}
