// Third-party libs
import Link from 'next/link';

export default function Breadcrumb({ name }) {
    return (
        <div className='py-6 hidden md:block text-sm'>
            <Link href='/' className='opacity-70 hover:opacity-100 transition'>
                Trang chủ
            </Link>
            <span className='mx-1'>/</span>
            <span>{name}</span>
        </div>
    );
}
