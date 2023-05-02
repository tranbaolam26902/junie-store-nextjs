// Third-party libs
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

// App's features
import { setShowCart, setIsClosing, selectCart } from '~/redux/features/cartSlice';

// Asset files
import iconClose from '@/assets/icons/close.svg';
import iconCart from '@/assets/icons/cart.svg';
import iconBagTransparent from '@/assets/icons/bag-transparent.svg';
import iconBagWhite from '@/assets/icons/bag-white.svg';
import iconCod from '@/assets/icons/cod.svg';
import iconBank from '@/assets/icons/bank.svg';
import iconMomo from '@/assets/icons/momo.svg';
import iconAmex from '@/assets/icons/amex.svg';
import iconMasterCard from '@/assets/icons/mastercard.svg';
import iconVisa from '@/assets/icons/visa.svg';

// App's components
import Button from '~/app/components/Button';
import CartItem from './CartItem';

export default function Cart() {
    // Hooks
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);

    // Component's functions
    const countTotalPrice = () =>
        cart.products.reduce((acc, curr) => {
            return curr.discount
                ? acc + curr.price * (1 - curr.discount) * curr.quantity
                : acc + curr.price * curr.quantity;
        }, 0);

    // Component's event handlers
    const handleCloseCart = () => {
        dispatch(setIsClosing(true));
        setTimeout(() => {
            dispatch(setShowCart(false));
        }, 200);
    };

    useEffect(() => {
        setTotalPrice(countTotalPrice());
        // eslint-disable-next-line
    }, [cart.products]);

    return (
        <>
            {/* Start: Cart's overlay */}
            <div
                className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                    cart.isClosing ? 'animate-fade-out' : 'animate-fade-in'
                }`}
                onClick={handleCloseCart}
            ></div>
            {/* End: Cart's overlay */}
            {/* Start: Cart */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 overflow-y-auto no-scrollbar overscroll-contain flex flex-col w-[90vw] max-w-[500px] h-screen bg-white ${
                    cart.isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
                } `}
            >
                {/* Start: Cart header */}
                <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray'>
                    <div className='flex items-center gap-2'>
                        <span>
                            <Image src={iconCart} alt='icon-cart' />
                        </span>
                        <span className='inline-block pt-1 text-lg font-bold tracking-wider'>
                            {cart.products.length !== 0 ? `${cart.products.length} sản phẩm` : 'Giỏ hàng'}
                        </span>
                    </div>
                    <Button leftIcon={iconClose} iconSize={16} className='mr-[-8px]' onClick={handleCloseCart} />
                </div>
                {/* End: Cart header */}
                {/* Start: Cart body */}
                {cart.products.length > 0 ? (
                    <>
                        {/* Start: Products */}
                        <div className='flex flex-col flex-1 overflow-y-auto no-scrollbar overscroll-contain gap-6 px-6 md:px-10 py-6'>
                            {cart.products.map((product, index) => (
                                <CartItem key={index} data={product} />
                            ))}
                        </div>
                        {/* End: Products */}
                        {/* Start: Cart footer */}
                        <div className='relative px-6 md:px-10 py-6 border-t border-gray before:absolute before:left-0 before:bottom-full before:w-full before:h-6 before:bg-gradient-to-t before:from-white before:to-white/0 before:-translate-y-[0.5px]'>
                            {/* Start: Delivery fee */}
                            <div className='flex justify-between'>
                                <span>Phí vận chuyển:</span>
                                {totalPrice > cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                                    <div className='flex gap-2'>
                                        <span className='line-through opacity-70'>
                                            {new Intl.NumberFormat('vi-VN').format(cart.DELIVERY_FEE)}
                                            <sup className='ml-0.5 underline'>đ</sup>
                                        </span>
                                        <span className='text-red uppercase'>Miễn phí</span>
                                    </div>
                                ) : (
                                    <span>
                                        {new Intl.NumberFormat('vi-VN').format(cart.DELIVERY_FEE)}
                                        <sup className='ml-0.5 underline'>đ</sup>
                                    </span>
                                )}
                            </div>
                            {/* End: Delivery fee */}
                            {/* Start: Button checkout */}
                            <Button
                                href='/checkout'
                                leftIcon={iconBagWhite}
                                rightIcon={iconBagTransparent}
                                iconSize={18}
                                secondary
                                className='flex justify-between mt-6 px-5 w-full'
                                onClick={handleCloseCart}
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
                                <span className='text-sm opacity-70'>Thanh toán tiện lợi, an toàn, bảo mật qua:</span>
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
                    <>
                        {/* Start: Empty cart */}
                        <div className='flex flex-col gap-10 items-center justify-center w-full h-full'>
                            <span className='opacity-70'>Giỏ hàng của bạn đang trống</span>
                            <Button href='/collections/sale-outlet' secondary onClick={handleCloseCart}>
                                Bắt đầu mua sắm
                            </Button>
                        </div>
                        {/* End: Empty cart */}
                    </>
                )}
                {/* End: Cart body */}
            </div>
            {/* End: Cart */}
        </>
    );
}
