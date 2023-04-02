// Third-party libs
import Link from 'next/link';
import Image from 'next/image';

// Asset files
import earrings from '@/assets/images/home/earrings.webp';

export default function CategoryItem({ data }) {
    return (
        <Link href={data.slug} className='group'>
            <div className='relative overflow-hidden rounded-lg'>
                <Image src={earrings} alt='category-image' className='invisible' />
                <Image
                    src={data.image}
                    fill
                    sizes='40vw
                    (max-width: 768px) 30vw
                    (max-width: 1024px) 25vw
                    (max-width: 1280px) 20vw'
                    alt='category-image'
                    className='absolute top-0 left-0 right-0 bottom-0 group-hover:scale-105 transition-transform duration-500'
                />
            </div>
            <p className='mt-6 mx-auto w-fit text-sm font-bold uppercase border-b border-gray transition duration-500 group-hover:border-current'>
                {data.name}
            </p>
        </Link>
    );
}
