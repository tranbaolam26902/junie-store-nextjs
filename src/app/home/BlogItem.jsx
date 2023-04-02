// Third-party libs
import Image from 'next/image';
import Link from 'next/link';

// Asset files
import blogPlaceholder from '@/assets/images/home/blog-01.webp';
import arrowRight from '@/assets/icons/arrow-right.svg';

// App's components
import Button from '../components/Button';

export default function BlogItem({ data }) {
    return (
        <Link href={data.slug} className='group w-full'>
            <div className='relative overflow-hidden rounded'>
                <Image src={blogPlaceholder} alt='blog-image' className='invisible' />
                <Image
                    src={data.image}
                    fill
                    sizes='80vw
                    (max-width: 768px) 60vw
                    (max-width: 1024px) 33vw'
                    alt='blog-image'
                    className='absolute top-0 left-0 right-0 bottom-0 group-hover:scale-105 transition-transform duration-500'
                />
                <Button
                    leftIcon={arrowRight}
                    iconSize={14}
                    className='absolute right-6 bottom-6 min-w-[40px] h-10 bg-primary rounded-sm transition-transform scale-0 group-hover:scale-100 duration-300'
                />
            </div>
            <span className='inline-block mt-6 text-xs font-bold tracking-wider uppercase opacity-70'>{data.tag}</span>
            <p className='mt-2 text-xl md:text-2xl font-bold capitalize'>{data.title}</p>
        </Link>
    );
}
