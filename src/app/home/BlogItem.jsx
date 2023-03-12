import Image from 'next/image';
import Link from 'next/link';

import arrowRight from '@/assets/icons/arrow-right.svg';
import Button from '../components/Button';

export default function BlogItem({ post }) {
    return (
        <Link href={post.path} className='group w-full'>
            <div className='relative overflow-hidden rounded'>
                <Image src={post.image} alt='blog-image' className='invisible' />
                <Image
                    src={post.image}
                    alt='blog-image'
                    className='absolute top-0 left-0 right-0 bottom-0 group-hover:scale-105 transition-transform duration-500'
                />
                <Button
                    leftIcon={arrowRight}
                    iconSize={14}
                    className='absolute right-6 bottom-6 w-[40px] h-10 bg-primary rounded-sm transition-transform scale-0 group-hover:scale-100 duration-300'
                />
            </div>
            <span className='inline-block mt-6 text-xs font-bold tracking-wider uppercase opacity-70'>{post.tag}</span>
            <p className='mt-2 text-xl md:text-2xl font-bold capitalize'>{post.title}</p>
        </Link>
    );
}
