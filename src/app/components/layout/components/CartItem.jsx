import Image from 'next/image';

import iconPlus from '@/assets/icons/plus.svg';
import iconMinus from '@/assets/icons/minus.svg';

import Button from '../../Button';

export default function CartItem({ data }) {
    return (
        <div className='flex gap-6'>
            <Image src={data.image} className='w-20 md:w-24 rounded' alt='cart-item-image' />
            <div className='flex-1'>
                <span>{data.name}</span>
                <div className='flex md:hidden gap-4 mt-1'>
                    {data.discount ? (
                        <>
                            <span className='text-red'>
                                {new Intl.NumberFormat('vi-VN').format(data.discount * data.quantity)}
                                <sup className='ml-0.5 underline'>đ</sup>
                            </span>
                            <span className='line-through opacity-70'>
                                {new Intl.NumberFormat('vi-VN').format(data.price * data.quantity)}
                                <sup className='ml-0.5 underline'>đ</sup>
                            </span>
                        </>
                    ) : (
                        <span>
                            {new Intl.NumberFormat('vi-VN').format(data.price * data.quantity)}
                            <sup className='ml-0.5 underline'>đ</sup>
                        </span>
                    )}
                </div>
                <div className='flex mt-1 md:mt-4'>
                    <div className='flex items-center border border-gray rounded-sm'>
                        <Button leftIcon={iconMinus} className='px-3 py-3 md:py-1 h-full text-lg font-bold' />
                        <span className='mx-2 pt-1 text-sm'>{data.quantity}</span>
                        <Button leftIcon={iconPlus} className='px-3 py-3 md:py-1 h-full text-lg font-bold' />
                    </div>
                    <button className='px-4 text-xs underline opacity-70'>Xóa</button>
                </div>
            </div>
            <div className='hidden md:flex flex-col'>
                {data.discount ? (
                    <>
                        <span className='text-red'>
                            {new Intl.NumberFormat('vi-VN').format(data.discount * data.quantity)}
                            <sup className='ml-0.5 underline'>đ</sup>
                        </span>
                        <span className='line-through opacity-70'>
                            {new Intl.NumberFormat('vi-VN').format(data.price * data.quantity)}
                            <sup className='ml-0.5 underline'>đ</sup>
                        </span>
                    </>
                ) : (
                    <span>
                        {new Intl.NumberFormat('vi-VN').format(data.price * data.quantity)}
                        <sup className='ml-0.5 underline'>đ</sup>
                    </span>
                )}
            </div>
        </div>
    );
}
