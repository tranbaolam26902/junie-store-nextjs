'use client';

import Image from 'next/image';
// Third-party libs
import { useState } from 'react';

// App's components
import Button from '~/app/components/Button';
import toggleConfirmed from '~/services/orders/toggleConfirmed';

export default function OrderItem({ order }) {
    // Component's states
    const [confirmState, setConfirmState] = useState(order.isConfirmed);

    // Component's event handlers
    const handleToggleConfirmed = async () => {
        const data = await toggleConfirmed(order.id);
        setConfirmState(data);
    };

    return (
        <div className='w-[944px] lg:w-full grid grid-cols-12 p-4 items-center'>
            <div className='self-start col-span-1 text-center'>
                {new Date(order.orderDate).toLocaleDateString('en-US')}
            </div>
            <div className='self-start col-span-2 px-4'>{order.name}</div>
            <div className='self-start col-span-2 text-center'>{order.phoneNumber}</div>
            <div className='col-span-4 flex flex-col gap-4 px-4'>
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>Products:</span>
                    <div className='flex flex-col gap-2'>
                        {order.orderProducts.map((product, index) => (
                            <div key={index} className='flex gap-2'>
                                <span>{index + 1}.</span>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${product.imageUrl}`}
                                    width={48}
                                    height={64}
                                    alt='product-image'
                                    className='rounded shadow'
                                />
                                <div className='flex flex-col'>
                                    <span>{product.productName}</span>
                                    <div className='flex gap-1 text-sm text-secondary/80'>
                                        <span>{product.quantity}</span>
                                        <span>x</span>
                                        <span>{new Intl.NumberFormat('vi-VN').format(product.price)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>Address:</span>
                    <p>{order.address}</p>
                </div>
                {order.addressDescription && (
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Address description:</span>
                        <p>{order.addressDescription}</p>
                    </div>
                )}
                {order.notes && (
                    <div className='flex flex-col'>
                        <span className='text-sm font-semibold'>Notes:</span>
                        <p>{order.notes}</p>
                    </div>
                )}
            </div>
            <div className='col-span-2 text-center'>{new Intl.NumberFormat('vi-VN').format(order.totalPrice)}</div>
            <div className='col-span-1 text-center'>
                {confirmState ? (
                    <Button
                        text
                        className='text-green transition duration-200 hover:opacity-70'
                        onClick={handleToggleConfirmed}
                    >
                        Yes
                    </Button>
                ) : (
                    <Button
                        text
                        className='text-red transition duration-200 hover:opacity-70'
                        onClick={handleToggleConfirmed}
                    >
                        No
                    </Button>
                )}
            </div>
        </div>
    );
}
