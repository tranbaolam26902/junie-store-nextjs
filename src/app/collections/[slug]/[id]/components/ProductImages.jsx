'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProductImages({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleChangeImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className='flex flex-col gap-y-6'>
            <Image
                priority
                width={1000}
                height={1000}
                sizes='100vw (max-width: 1024px) 50vw'
                src={data[currentIndex]}
                alt='product-image'
                className='-mx-6 md:-mx-10 lg:mx-0 min-w-[100vw] lg:min-w-full w-full lg:rounded'
            />
            <div className='relative'>
                <div className='flex gap-x-4 pl-1 pr-8 py-1 overflow-x-auto no-scrollbar'>
                    {data.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            width={64}
                            height={64}
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
