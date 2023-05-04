'use client';

// Third-party libs
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// App's features
import { selectCart } from '~/redux/features/cartSlice';

// styles
import styles from '~/app/loading.module.scss';

// App's components
import Button from '~/app/components/Button';
import CartItem from '~/app/(client)/components/layout/components/CartItem';

export default function CartSection() {
    // Hooks
    const cart = useSelector(selectCart);

    // Component's states
    const [totalPrice, setTotalPrice] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    // Component's functions
    const countTotalPrice = () =>
        cart.products.reduce((acc, curr) => {
            return curr.discount
                ? acc + curr.price * (1 - curr.discount) * curr.quantity
                : acc + curr.price * curr.quantity;
        }, 0);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        setTotalPrice(countTotalPrice());
        // eslint-disable-next-line
    }, [cart.products]);

    if (!hasMounted)
        return (
            <div className='flex items-center justify-center w-full h-full'>
                <div className={styles['loadingio-spinner-dual-ring-qo59o73r0tl']}>
                    <div className={styles['ldio-0m5i1demrio']}>
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <section className='relative z-10 flex flex-col gap-4'>
            {cart.products.map((product, index) => (
                <CartItem key={index} data={product} />
            ))}
            <hr className='text-secondary/10 my-2' />
            <div className='flex gap-4'>
                <input type='text' placeholder='Mã giảm giá' className='flex-1 px-4 border border-gray rounded' />
                <Button disable>Áp dụng</Button>
            </div>
            <span className='text-red'></span>
            <hr className='text-secondary/10 my-2' />
            <div className='flex flex-col gap-4 text-secondary/70'>
                <div className='flex justify-between'>
                    <span>Sản phẩm</span>
                    <span>
                        {new Intl.NumberFormat('vi-VN').format(totalPrice)}
                        <sup>đ</sup>
                    </span>
                </div>
                {totalPrice > 0 && (
                    <div
                        className={`flex justify-between ${
                            totalPrice >= cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE ? 'text-green' : 'text-red'
                        }`}
                    >
                        <span>Vận chuyển</span>
                        {totalPrice >= cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                            <span>Miễn phí</span>
                        ) : (
                            <div>
                                <span>{new Intl.NumberFormat('vi-VN').format(cart.DELIVERY_FEE)}</span>
                                <sup>đ</sup>
                            </div>
                        )}
                    </div>
                )}
                {/* <div className='flex justify-between text-green'>
                    <span>Mã giảm giá</span>
                    <span>
                        -30.000<sup>đ</sup>
                    </span>
                </div> */}
            </div>
            <hr className='text-secondary/10 my-2' />
            <div className='flex items-end justify-between'>
                <span className='text-xl tracking-wider'>Tổng</span>
                <span className='text-3xl'>
                    {new Intl.NumberFormat('vi-VN').format(
                        totalPrice >= cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE
                            ? totalPrice
                            : totalPrice > 0
                            ? totalPrice + cart.DELIVERY_FEE
                            : 0,
                    )}
                    <sup>đ</sup>
                </span>
            </div>
        </section>
    );
}
