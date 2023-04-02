'use client';

// Third-party libs
import { useDispatch } from 'react-redux';
import Image from 'next/image';

// App's features
import { removeProduct, setProductQuantity } from '~/redux/features/cartSlice';

// Asset files
import iconPlus from '@/assets/icons/plus.svg';
import iconMinus from '@/assets/icons/minus.svg';

// App's components
import Button from '../../Button';

export default function CartItem({ data }) {
    // Hooks
    const dispatch = useDispatch();

    // Component's event handlers
    const handleIncrease = () => {
        dispatch(setProductQuantity({ id: data.id, quantity: data.quantity + 1 }));
    };
    const handleDecrease = () => {
        dispatch(setProductQuantity({ id: data.id, quantity: data.quantity - 1 }));
    };
    const handleRemove = () => {
        dispatch(removeProduct(data.id));
    };

    return (
        <div className='flex gap-6'>
            <Image src={data.image} width={96} height={96} className='w-20 md:w-24 rounded' alt='cart-item-image' />
            <div className='flex-1'>
                <span>{data.name}</span>
                <div className='flex md:hidden gap-4 mt-1'>
                    {data.discount ? (
                        <>
                            <span className='text-red'>
                                {new Intl.NumberFormat('vi-VN').format(
                                    data.price * (1 - data.discount) * data.quantity,
                                )}
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
                        <Button
                            leftIcon={iconMinus}
                            className={`px-3 py-3 md:py-1 h-full text-lg font-bold ${
                                data.quantity > 1 ? '' : 'opacity-30'
                            }`}
                            onClick={data.quantity > 1 ? handleDecrease : null}
                        />
                        <span className='mx-2 pt-1 text-sm'>{data.quantity}</span>
                        <Button
                            leftIcon={iconPlus}
                            className='px-3 py-3 md:py-1 h-full text-lg font-bold'
                            onClick={handleIncrease}
                        />
                    </div>
                    <button className='px-4 text-xs underline opacity-70' onClick={handleRemove}>
                        Xóa
                    </button>
                </div>
            </div>
            <div className='hidden md:flex flex-col'>
                {data.discount ? (
                    <>
                        <span className='text-red'>
                            {new Intl.NumberFormat('vi-VN').format(data.price * (1 - data.discount) * data.quantity)}
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
