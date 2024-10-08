'use client';

// Third-party libs
import { useState } from 'react';
import Image from 'next/image';

export default function ProductImages({ images }) {
    // Component's states
    const [currentIndex, setCurrentIndex] = useState(0);

    // Component's event handlers
    const handleChangeImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className='flex flex-col gap-y-6'>
            <Image
                priority
                width={1000}
                height={1000}
                sizes='100vw (max-width: 1024px) 50vw'
                src={`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${images[currentIndex]?.path}`}
                alt='product-image'
                className='-mx-6 md:-mx-10 lg:mx-0 min-w-[100vw] lg:min-w-full w-full lg:rounded'
            />
            <div className='relative'>
                <div className='flex gap-x-4 pl-1 pr-8 py-1 overflow-x-auto no-scrollbar'>
                    {images.map((image, index) => (
                        <Image
                            key={image.id}
                            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${image.path}`}
                            width={64}
                            height={80}
                            alt='product-image'
                            className={`w-16 h-20 ${
                                index === currentIndex ? 'outline' : ''
                            } outline-2 outline-offset-2 outline-black rounded-[1px] cursor-pointer`}
                            onClick={() => handleChangeImage(index)}
                        />
                    ))}
                </div>
                <div className='before:absolute before:top-0 before:bottom-0 before:-right-1 before:w-8 before:h-full before:bg-gradient-to-l before:from-white before:to-white/5'></div>
            </div>
        </section>
    );
}
