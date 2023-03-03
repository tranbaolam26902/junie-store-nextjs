import Link from 'next/link';
import Image from 'next/image';

export default function CategoryItem({ path, image, title }) {
    return (
        <Link href='/' className='group'>
            <Image src={image} alt='category-image' className='rounded-lg' />
            <p className='mt-6 mx-auto w-fit text-sm font-bold uppercase border-b border-gray transition duration-300 group-hover:border-current'>
                {title}
            </p>
        </Link>
    );
}
