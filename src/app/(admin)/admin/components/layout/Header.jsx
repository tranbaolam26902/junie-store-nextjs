// Third-party libs
import Image from 'next/image';
import Link from 'next/link';

// Asset files
import brandLogo from '@/assets/images/brand-logo.jpg';

// App's components
import Navbar from './components/Navbar';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 z-40 w-full bg-white drop-shadow'>
            <div className='flex items-center gap-4 lg:gap-10 mx-auto px-6 md:px-10 max-w-screen-2xl h-[var(--header-height)]'>
                <Link href='/admin/dashboard' className='order-2 lg:order-1'>
                    <Image src={brandLogo} className='max-w-[80px]' alt='brand-logo' priority />
                </Link>
                <Navbar />
            </div>
        </header>
    );
}
