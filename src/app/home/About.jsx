'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import about from '@/assets/images/home/about.webp';

export default function About() {
    useEffect(() => {
        /**
         * Trigger animation when scroll into view
         */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-[slide-in-bottom_300ms_ease-in-out_both]');
                    return;
                }
            });
        });
        observer.observe(document.querySelector('.about'));
    }, []);

    return (
        <div className='relative mt-16'>
            <div className='relative z-10 mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <div className='md:mx-4 md:px-16 py-8 md:py-12 lg:py-16 grid gap-x-32 lg:grid-cols-2'>
                    <div className='relative'>
                        <div className='absolute -top-8 md:-top-12 lg:-top-16 left-[-1000vw] right-0 -bottom-16 md:-bottom-20 lg:-bottom-16 translate-x-32 lg:-translate-x-32 bg-[#f9f5f1]'></div>
                        <Image src={about} alt='about-image' className='relative z-10 rounded' />
                    </div>
                    <div className='about grid gap-y-4 lg:gap-y-6 mt-8 md:mt-12 lg:my-auto opacity-0'>
                        <p className='text-sm font-semibold tracking-wider uppercase'>Trải nghiệm khách hàng</p>
                        <p className='text-[26px] md:text-[32px] xl:text-4xl font-bold'>Sản phẩm tại Junie</p>
                        <p>Tạm biệt những mẫu phụ kiện đắt đỏ một cách vô lý do chi phí mặt bằng & kênh phân phối.</p>
                        <p>
                            Junie tập trung vào kênh Online và làm chủ quá trình sản xuất, mang tất cả chi phí tiết kiệm
                            được nâng cao trải nghiệm khách hàng với một mức giá hợp lý.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
