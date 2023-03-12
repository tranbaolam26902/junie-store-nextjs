'use client';

import { useState } from 'react';

import box from '@/assets/icons/box.svg';
import phone from '@/assets/icons/phone.svg';
import bag from '@/assets/icons/bag.svg';
import email from '@/assets/icons/email.svg';

import ServiceItem from './ServiceItem';

const services = [
    {
        icon: box,
        title: 'Freeship',
        description: 'Miễn phí vận chuyển toàn quốc đơn hàng từ 250K',
    },
    {
        icon: phone,
        title: 'Dịch vụ khách hàng',
        description: 'Bạn hỏi, Junie trả lời. Mọi thắc mắc được giải đáp.',
    },
    {
        icon: bag,
        title: 'Thanh toán tiện lợi',
        description: 'COD, chuyển khoản hay thanh toán qua thẻ, Junie đều hỗ trợ một cách bảo mật và tiện lợi nhất.',
    },
    {
        icon: email,
        title: 'Liên hệ',
        description: 'Cần liên hệ với Junie, hãy email tới hello@junie.vn hoặc hotline 0862 658643',
    },
];

export default function ServiceSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='mx-auto mt-16 px-6 md:px-10 max-w-screen-2xl group'>
            <div className='lg:hidden relative'>
                <div className='opacity-0 py-4'>
                    <ServiceItem service={services[2]} />
                    <span className='inline-block mx-2 w-4 h-4 bg-secondary'></span>
                </div>
                <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between'>
                    <ServiceItem service={services[currentIndex]} />
                    <div className='flex justify-center py-2'>
                        {services.map((service, index) => (
                            <div key={index} onClick={() => setCurrentIndex(index)}>
                                {index === currentIndex ? (
                                    <span className='inline-block mx-2 w-4 h-4 bg-secondary rounded'></span>
                                ) : (
                                    <span className='inline-block mx-2 w-4 h-4 bg-gray rounded'></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='hidden lg:grid grid-cols-4 gap-10'>
                {services.map((service, index) => (
                    <ServiceItem key={index} service={service} />
                ))}
            </div>
        </div>
    );
}
