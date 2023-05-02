'use client';

// Third-party libs
import { useState } from 'react';
import Image from 'next/image';

// Asset files
import aboutFirst from '@/assets/images/home/about-first.webp';
import aboutSecond from '@/assets/images/home/about-second.webp';

// App's components
import Button from '~/app/components/Button';

export default function AboutSection() {
    // Component's states
    const [isActive, setIsActive] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    return (
        <div className='relative mt-16'>
            <div className='relative z-10 mx-auto px-6 md:px-10 max-w-screen-2xl overflow-x-hidden'>
                <div className='md:px-16 py-8 md:py-12 lg:py-16 grid gap-x-16 gap-y-8 sm:gap-y-12 xl:gap-x-32 lg:grid-cols-2'>
                    <div className='relative flex items-center'>
                        <div className='absolute -top-8 md:-top-12 lg:-top-16 left-[-1000vw] right-0 bottom-16 md:-bottom-20 lg:-bottom-16 translate-x-32 lg:-translate-x-32 bg-[#f9f5f1]'></div>
                        {isActive ? (
                            <Image
                                src={aboutFirst}
                                alt='about-image'
                                className={`relative z-10 rounded ${
                                    isClosing
                                        ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                        : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                                }`}
                            />
                        ) : (
                            <Image
                                src={aboutSecond}
                                alt='about-image'
                                className={`relative z-10 rounded ${
                                    isClosing
                                        ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                        : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                                }`}
                            />
                        )}
                    </div>
                    <div className='flex flex-col justify-between xl:my-16'>
                        {isActive ? (
                            <div className='min-h-[320px] md:min-h-[256px]'>
                                <div className='grid gap-y-4 xl:gap-y-6 xl:mt-8 xl:pr-8'>
                                    <p
                                        className={`text-sm font-semibold tracking-wider uppercase ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_300ms_both]'
                                        }`}
                                    >
                                        Trải nghiệm khách hàng
                                    </p>
                                    <p
                                        className={`text-[26px] md:text-[32px] xl:text-4xl font-bold ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_350ms_both]'
                                        }`}
                                    >
                                        Sản phẩm tại Junie
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Tạm biệt những mẫu phụ kiện đắt đỏ một cách vô lý do chi phí mặt bằng & kênh
                                        phân phối.
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie tập trung vào kênh Online và làm chủ quá trình sản xuất, mang tất cả chi
                                        phí tiết kiệm được nâng cao trải nghiệm khách hàng với một mức giá hợp lý.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className='min-h-[320px] md:min-h-[256px]'>
                                <div className='grid gap-y-4 xl:gap-y-6 xl:mt-8 xl:pr-8'>
                                    <p
                                        className={`text-sm font-semibold tracking-wider uppercase ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_300ms_both]'
                                        }`}
                                    >
                                        Sản phẩm chất lượng
                                    </p>
                                    <p
                                        className={`text-[26px] md:text-[32px] xl:text-4xl font-bold ${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_350ms_both]'
                                        }`}
                                    >
                                        Bạn sẽ Hài Lòng
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie không quá quan trọng về lợi nhuận của đơn hàng đầu tiên vì Junie biết bạn
                                        sẽ quay trở lại vì chất lượng và sự hài lòng.
                                    </p>
                                    <p
                                        className={`${
                                            isClosing
                                                ? 'animate-[slide-out-bottom_100ms_ease-in-out_both]'
                                                : 'animate-[slide-in-bottom_300ms_ease-in-out_600ms_both]'
                                        }`}
                                    >
                                        Junie hợp tác với những nghệ nhân cả trong nước & quốc tế để lựa chọn ra điểm
                                        mạnh của từng nghệ nhân với mỗi loại sản phẩm. Với mục địch cuối cùng mang lại
                                        một sản phẩm không chỉ chất lượng mà còn trọn vẹn về cảm xúc.
                                    </p>
                                </div>
                            </div>
                        )}
                        <div className='flex gap-10 justify-center'>
                            <Button
                                text
                                className={`border-b ${
                                    isActive ? 'border-secondary opacity-100' : 'border-transparent opacity-70'
                                } transition duration-500`}
                                onClick={() => {
                                    if (!isActive) {
                                        setIsClosing(true);
                                        setTimeout(() => {
                                            setIsClosing(false);
                                            setIsActive(true);
                                        }, 100);
                                    }
                                }}
                            >
                                Giá hợp lý
                            </Button>
                            <Button
                                text
                                className={`border-b ${
                                    !isActive ? 'border-secondary opacity-100' : 'border-transparent opacity-70'
                                } transition duration-500`}
                                onClick={() => {
                                    if (isActive) {
                                        setIsClosing(true);
                                        setTimeout(() => {
                                            setIsClosing(false);
                                            setIsActive(false);
                                        }, 100);
                                    }
                                }}
                            >
                                Chất lượng AAA
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
