import Link from 'next/link';
import Image from 'next/image';

export default function CategoryItem({ path, image, title }) {
    return (
        <Link href='/' className='group'>
            <div className='relative overflow-hidden rounded-lg'>
                <Image src={image} alt='category-image' className='invisible' />
                <Image
                    src={image}
                    alt='category-image'
                    className='absolute top-0 left-0 right-0 bottom-0 group-hover:scale-105 transition-transform duration-500'
                />
            </div>
            <p className='mt-6 mx-auto w-fit text-sm font-bold uppercase border-b border-gray transition duration-500 group-hover:border-current'>
                {title}
            </p>
        </Link>
    );
}
