import Image from 'next/image';

import { MIN_PRICE_FOR_FREE_DELIVERY_FEE } from '~/app/utils/constants';
import iconTruck from '@/assets/icons/truck.svg';
import iconStar from '@/assets/icons/star.svg';
import iconCod from '@/assets/icons/cod.svg';
import iconBank from '@/assets/icons/bank.svg';
import iconMomo from '@/assets/icons/momo.svg';
import iconAmex from '@/assets/icons/amex.svg';
import iconMasterCard from '@/assets/icons/mastercard.svg';
import iconVisa from '@/assets/icons/visa.svg';
import iconTruckBlack from '@/assets/icons/truck-black.svg';
import iconMaterial from '@/assets/icons/material.svg';
import iconHeart from '@/assets/icons/heart.svg';
import iconWarranty from '@/assets/icons/warranty.svg';

import Button from '~/app/components/Button';

export default function ProductInfo({ data }) {
    return (
        <div>
            <p className='mb-6 text-2xl md:text-3xl lg:text-4xl font-bold'>Dây chuyền Katherine</p>
            <div className='flex items-center gap-x-3 mb-4'>
                {data.discount ? (
                    <>
                        <span className='text-2xl text-red'>
                            {new Intl.NumberFormat('vi-VN').format(data.price * (1 - data.discount))}
                            <sup className='underline'>đ</sup>
                        </span>
                        <span className='line-through opacity-70'>
                            {new Intl.NumberFormat('vi-VN').format(data.price)}
                            <sup className='underline'>đ</sup>
                        </span>
                    </>
                ) : (
                    <span className='text-2xl'>
                        {new Intl.NumberFormat('vi-VN').format(data.price)}
                        <sup className='underline'>đ</sup>
                    </span>
                )}
                {data.outOfStock ? (
                    <span className='inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-[#6f719b] rounded-sm'>
                        Hết hàng
                    </span>
                ) : (data.discount && data.price * (1 - data.discount) >= MIN_PRICE_FOR_FREE_DELIVERY_FEE) ||
                  data.price >= MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                    <span className='flex px-[5px] pt-[3px] w-fit text-xs tracking-wider text-white font-bold uppercase bg-green rounded-sm'>
                        <Image src={iconTruck} width={14} height={14} alt='freeship-icon' className='mb-0.5 mr-1' />
                        <span>Freeship</span>
                    </span>
                ) : data.discount ? (
                    <span className='inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-red rounded-sm'>
                        Tiết kiệm <span className='text-[13px]'>{data.discount * 100}%</span>
                    </span>
                ) : null}
            </div>
            <div className='flex items-center justify-between'>
                {data.rating ? (
                    <div className='flex gap-1'>
                        <Image src={iconStar} width={16} alt='icon-star' />
                        <Image src={iconStar} width={16} alt='icon-star' />
                        <Image src={iconStar} width={16} alt='icon-star' />
                        <Image src={iconStar} width={16} alt='icon-star' />
                        <Image src={iconStar} width={16} alt='icon-star' />
                        <span className='pt-1 pl-2'>{data.rating.total} đánh giá</span>
                    </div>
                ) : null}
                <span className='pt-1 text-xs tracking-wider uppercase opacity-70'>SKU: {data.type}</span>
            </div>
            <hr className='mt-4 mb-8 text-gray' />
            {data.outOfStock ? (
                <Button disable full>
                    Hết hàng
                </Button>
            ) : (
                <>
                    <p className='mb-8 text-[#2e9e7b]'>Còn hàng, dự kiến giao tới trong 1-3 ngày</p>
                    <Button secondary full>
                        Thêm vào giỏ
                    </Button>
                </>
            )}
            <div className='flex flex-col items-center justify-center'>
                <p className='my-4 opacity-70'>Thanh toán tiện lợi, an toàn & bảo mật với:</p>
                <div className='flex gap-x-2'>
                    <Image src={iconCod} width={48} height='auto' alt='payment-method-icon' />
                    <Image src={iconBank} width={48} height='auto' alt='payment-method-icon' />
                    <Image src={iconMomo} width={48} height='auto' alt='payment-method-icon' />
                    <Image src={iconAmex} width={48} height='auto' alt='payment-method-icon' />
                    <Image src={iconMasterCard} width={48} height='auto' alt='payment-method-icon' />
                    <Image src={iconVisa} width={48} height='auto' alt='payment-method-icon' />
                </div>
            </div>
            <div className='flex flex-col gap-y-3 mt-10 mb-6'>
                <div className='flex items-center'>
                    <Image src={iconTruckBlack} width={24} alt='icon' className='mr-4' />
                    <p>
                        <span className='font-bold'>FREESHIP</span> cho đơn hàng từ 250K
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image src={iconMaterial} width={24} alt='icon' className='mr-4' />
                    <p>
                        Chất liệu cao cấp <span className='font-bold'>không dị ứng</span>, không ngứa, an toàn cho da
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image src={iconHeart} width={24} alt='icon' className='mr-4' />
                    <p>
                        Chế tác tinh xảo, <span className='font-bold'>bền màu</span> theo thời gian
                    </p>
                </div>
                <div className='flex items-center'>
                    <Image src={iconWarranty} width={24} alt='icon' className='mr-4' />
                    <p>
                        <span className='font-bold'>Bảo hành</span> sản phẩm 30 ngày
                    </p>
                </div>
            </div>
        </div>
    );
}
