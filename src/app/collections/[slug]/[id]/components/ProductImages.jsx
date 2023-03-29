'use client';

import { useState } from 'react';
import Image from 'next/image';

import image from '@/assets/images/collections/bracelet/products/jenna-01.webp';
import image2 from '@/assets/images/collections/bracelet/products/jenna-02.webp';
import image3 from '@/assets/images/collections/bracelet/products/amira-01.webp';
import image4 from '@/assets/images/collections/bracelet/products/amira-02.webp';
import image5 from '@/assets/images/collections/bracelet/products/eden-01.webp';
import image6 from '@/assets/images/collections/bracelet/products/eden-02.webp';

const images = [image, image2, image3, image5, image6, image, image2, image3, image5, image6, image, image2];

export default function ProductImages({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='flex flex-col gap-y-6'>
            <Image
                priority
                src={images[currentIndex]}
                alt='product-image'
                className='-mx-6 md:-mx-10 lg:mx-0 min-w-[100vw] lg:min-w-full w-full lg:rounded'
            />
            <div className='relative'>
                <div className='flex gap-x-4 pl-1 pr-8 py-1 overflow-x-auto no-scrollbar'>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width={64}
                            alt='product-image'
                            className={`${
                                index === currentIndex ? 'outline' : ''
                            } outline-2 outline-offset-2 outline-black rounded-[1px] cursor-pointer`}
                            onClick={() => handleChangeImage(index)}
                        />
                    ))}
                </div>
                <div className='before:absolute before:top-0 before:bottom-0 before:-right-1 before:w-8 before:h-full before:bg-gradient-to-l before:from-white before:to-white/5'></div>
            </div>
        </div>
    );
}
