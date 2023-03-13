'use client';

import { useState } from 'react';
import Image from 'next/image';

import iconSearch from '@/assets/icons/search.svg';
import iconCart from '@/assets/icons/cart.svg';
import iconClose from '@/assets/icons/close.svg';
import iconBag from '@/assets/icons/bag.svg';
import iconBagWhite from '@/assets/icons/bag-white.svg';
import iconCod from '@/assets/icons/cod.svg';
import iconBank from '@/assets/icons/bank.svg';
import iconMomo from '@/assets/icons/momo.svg';
import iconAmex from '@/assets/icons/amex.svg';
import iconMasterCard from '@/assets/icons/mastercard.svg';
import iconVisa from '@/assets/icons/visa.svg';
import product1 from '@/assets/images/products/product-01.webp';
import product2 from '@/assets/images/products/product-02.webp';
import product3 from '@/assets/images/products/product-03.webp';
import product4 from '@/assets/images/products/product-04.webp';
import product5 from '@/assets/images/products/product-05.webp';

import Button from '../../Button';
import CartItem from './CartItem';

const products = [
    {
        image: product1,
        name: 'Bông tai Lara',
        price: 180000,
        quantity: 1,
    },
    {
        image: product2,
        name: 'Bông tai Faustine',
        price: 180000,
        quantity: 1,
    },
    {
        image: product3,
        name: 'Bông tai Ivy',
        price: 220000,
        discount: 132000,
        quantity: 1,
    },
    {
        image: product4,
        name: 'Bông tai Stella',
        price: 220000,
        quantity: 1,
    },
    {
        image: product5,
        name: 'Bông tai Selini',
        price: 220000,
        discount: 110000,
        quantity: 1,
    },
];
const totalPrice = products.reduce((acc, curr) => {
    return curr.discount ? acc + curr.discount : acc + curr.price;
}, 0);
const MIN_PRICE_FOR_FREE_DELIVERY_FEE = 250000;
const deliveryFee = 30000;

export default function UserActions() {
    /**
     * Component's states
     */
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // Use to toggle animations

    /**
     * Component's event handlers
     */
    const handleOpenCart = () => {
        setIsClosing(false);
        setShowCart(true);
    };
    const handleCloseCart = () => {
        setIsClosing(true);
        setTimeout(() => setShowCart(false), 200);
    };

    const handleOpenSearch = () => {
        setIsClosing(false);
        setShowSearch(true);
    };
    const handleCloseSearch = () => {
        setIsClosing(true);
        setTimeout(() => setShowSearch(false), 200);
    };

    return (
        <div className='flex flex-1 justify-end gap-x-2 mr-[-8px]'>
            <Button leftIcon={iconSearch} onClick={handleOpenSearch} />
            <Button leftIcon={iconCart} className='relative' onClick={handleOpenCart}>
                <div className='absolute top-0.5 right-[-6px] pt-px w-5 h-5 text-[12px] text-white bg-black rounded-full'>
                    {products.length}
                </div>
            </Button>
            {showCart ? (
                <>
                    {/* Start: Cart's overlay */}
                    <div
                        className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                            isClosing ? 'animate-fade-out' : 'animate-fade-in'
                        }`}
                        onClick={handleCloseCart}
                    ></div>
                    {/* End: Cart's overlay */}
                    {/* Start: Cart */}
                    <div
                        className={`fixed top-0 right-0 bottom-0 z-50 overflow-y-auto no-scrollbar overscroll-contain flex flex-col w-[90vw] max-w-[500px] h-screen bg-white ${
                            isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
                        } `}
                    >
                        {/* Start: Cart header */}
                        <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray'>
                            <div class='flex items-center gap-2'>
                                <span>
                                    <Image src={iconCart} alt='icon-cart' />
                                </span>
                                <span className='inline-block pt-1 text-lg font-bold tracking-wider'>
                                    {products.length !== 0 ? `${products.length} sản phẩm` : 'Giỏ hàng'}
                                </span>
                            </div>
                            <Button
                                leftIcon={iconClose}
                                iconSize={16}
                                className='mr-[-8px]'
                                onClick={handleCloseCart}
                            />
                        </div>
                        {/* End: Cart header */}
                        {/* Start: Cart body */}
                        {products.length !== 0 ? (
                            <>
                                {/* Start: Products */}
                                <div className='flex flex-col flex-1 overflow-y-auto no-scrollbar overscroll-contain gap-6 px-6 md:px-10 py-6'>
                                    {products.map((product, index) => (
                                        <CartItem key={index} data={product} />
                                    ))}
                                </div>
                                {/* End: Products */}
                                {/* Start: Cart footer */}
                                <div className='relative px-6 md:px-10 py-6 border-t border-gray before:absolute before:left-0 before:bottom-full before:w-full before:h-6 before:bg-gradient-to-t before:from-white before:to-white/0 before:-translate-y-[0.5px]'>
                                    {/* Start: Delivery fee */}
                                    <div className='flex justify-between'>
                                        <span>Phí vận chuyển:</span>
                                        {totalPrice > MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                                            <div className='flex gap-2'>
                                                <span className='line-through opacity-70'>
                                                    {new Intl.NumberFormat('vi-VN').format(deliveryFee)}
                                                    <sup className='ml-0.5 underline'>đ</sup>
                                                </span>
                                                <span className='text-red uppercase'>Miễn phí</span>
                                            </div>
                                        ) : (
                                            <span>
                                                {new Intl.NumberFormat('vi-VN').format(deliveryFee)}
                                                <sup className='ml-0.5 underline'>đ</sup>
                                            </span>
                                        )}
                                    </div>
                                    {/* End: Delivery fee */}
                                    {/* Start: Button checkout */}
                                    <Button
                                        leftIcon={iconBagWhite}
                                        rightIcon={iconBag}
                                        iconSize={18}
                                        secondary
                                        className='flex justify-between mt-6 px-5 w-full'
                                    >
                                        <span className='text-[12px] md:text-[14px]'>Thanh toán</span>
                                        <span className='inline-block mx-2 md:mx-4 mb-0.5 w-1 h-1 bg-white'></span>
                                        <span className='text-[12px] md:text-[14px]'>
                                            {new Intl.NumberFormat('vi-VN').format(totalPrice)} VND
                                        </span>
                                    </Button>
                                    {/* End: Button checkout */}
                                    {/* Start: Payment methods */}
                                    <div className='mt-1 text-center'>
                                        <span className='text-sm opacity-70'>
                                            Thanh toán tiện lợi, an toàn, bảo mật qua:
                                        </span>
                                        <div className='flex gap-x-2 justify-center mt-1'>
                                            <Image src={iconCod} alt='payment-method-icon' />
                                            <Image src={iconBank} alt='payment-method-icon' />
                                            <Image src={iconMomo} alt='payment-method-icon' />
                                            <Image src={iconAmex} alt='payment-method-icon' />
                                            <Image src={iconMasterCard} alt='payment-method-icon' />
                                            <Image src={iconVisa} alt='payment-method-icon' />
                                        </div>
                                    </div>
                                    {/* End: Payment methods */}
                                </div>
                                {/* End: Cart footer */}
                            </>
                        ) : (
                            <div className='flex flex-col gap-10 items-center justify-center w-full h-full'>
                                <span className='opacity-70'>Giỏ hàng của bạn đang trống</span>
                                <Button secondary>Bắt đầu mua sắm</Button>
                            </div>
                        )}
                        {/* End: Cart body */}
                    </div>
                    {/* End: Cart */}
                </>
            ) : null}
            {showSearch ? (
                <>
                    {/* Start: Search's overlay */}
                    <div
                        className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                            isClosing ? 'animate-fade-out' : 'animate-fade-in'
                        }`}
                        onClick={handleCloseSearch}
                    ></div>
                    {/* End: Search's overlay */}
                    {/* Start: Search */}
                    <div
                        className={`fixed top-0 right-0 bottom-0 z-50 overflow-y-auto no-scrollbar overscroll-contain flex flex-col w-[90vw] max-w-[500px] h-screen bg-white ${
                            isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
                        } `}
                    >
                        {/* Start: Search header */}
                        <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray'>
                            <div class='flex flex-1 items-center gap-2'>
                                <span>
                                    <Image src={iconSearch} alt='icon-search' />
                                </span>
                                <input
                                    type='text'
                                    autoFocus
                                    placeholder='Bạn đang muốn tìm kiếm gì?'
                                    className='flex-1 border-none outline-none'
                                />
                            </div>
                            <Button
                                leftIcon={iconClose}
                                iconSize={16}
                                className='mr-[-8px]'
                                onClick={handleCloseSearch}
                            />
                        </div>
                        {/* End: Search header */}
                    </div>
                </>
            ) : null}
        </div>
    );
}
