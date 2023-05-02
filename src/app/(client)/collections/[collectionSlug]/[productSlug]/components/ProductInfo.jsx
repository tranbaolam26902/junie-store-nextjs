'use client';

// Third-party libs
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

// App's features
import { addProduct, selectCart, setIsClosing, setProductQuantity, setShowCart } from '~/redux/features/cartSlice';

// Asset files
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

// App's components
import Button from '~/app/(client)/components/Button';

export default function ProductInfo({ product }) {
    // Hooks
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // Component's event handlers
    const handleAddToCart = () => {
        const currentProduct = cart.products.find((p) => p.id === product.id);
        if (!currentProduct)
            dispatch(
                addProduct({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    discount: product.discount,
                    quantity: 1,
                    image: product.images[0].path,
                }),
            );
        else dispatch(setProductQuantity({ id: currentProduct.id, quantity: currentProduct.quantity + 1 }));

        dispatch(setIsClosing(false));
        dispatch(setShowCart(true));
    };

    return (
        <div>
            <p className='mb-6 text-2xl md:text-3xl lg:text-4xl font-bold'>{product.name}</p>
            <div className='flex items-center gap-x-3 mb-4'>
                {product.discount ? (
                    <>
                        <span className='text-2xl text-red'>
                            {new Intl.NumberFormat('vi-VN').format(product.price * (1 - product.discount))}
                            <sup className='underline'>đ</sup>
                        </span>
                        <span className='line-through opacity-70'>
                            {new Intl.NumberFormat('vi-VN').format(product.price)}
                            <sup className='underline'>đ</sup>
                        </span>
                    </>
                ) : (
                    <span className='text-2xl'>
                        {new Intl.NumberFormat('vi-VN').format(product.price)}
                        <sup className='underline'>đ</sup>
                    </span>
                )}
                {product.quantity === 0 ? (
                    <span className='inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-[#6f719b] rounded-sm'>
                        Hết hàng
                    </span>
                ) : (product.discount &&
                      product.price * (1 - product.discount) >= cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE) ||
                  product.price >= cart.MIN_PRICE_FOR_FREE_DELIVERY_FEE ? (
                    <span className='flex px-[5px] pt-[3px] w-fit text-xs tracking-wider text-white font-bold uppercase bg-green rounded-sm'>
                        <Image src={iconTruck} width={14} height={14} alt='freeship-icon' className='mb-0.5 mr-1' />
                        <span>Freeship</span>
                    </span>
                ) : product.discount ? (
                    <span className='inline-block px-[5px] pt-[3px] text-xs tracking-wider text-white font-bold uppercase bg-red rounded-sm'>
                        Tiết kiệm <span className='text-[13px]'>{product.discount * 100}%</span>
                    </span>
                ) : null}
            </div>
            <div className='flex items-center justify-between'>
                {product.ratings > 0 && (
                    <div className='flex gap-1'>
                        <Image src={iconStar} width={16} height={16} alt='icon-star' />
                        <Image src={iconStar} width={16} height={16} alt='icon-star' />
                        <Image src={iconStar} width={16} height={16} alt='icon-star' />
                        <Image src={iconStar} width={16} height={16} alt='icon-star' />
                        <Image src={iconStar} width={16} height={16} alt='icon-star' />
                        <span className='pt-1 pl-2'>{product.ratings} đánh giá</span>
                    </div>
                )}
                <span className='pt-1 text-xs tracking-wider uppercase opacity-70'>SKU: {product.type}</span>
            </div>
            <hr className='mt-4 mb-8 text-gray' />
            {product.quantity === 0 ? (
                <Button disable full>
                    Hết hàng
                </Button>
            ) : (
                <>
                    <p className='mb-8 text-[#2e9e7b]'>Còn hàng, dự kiến giao tới trong 1-3 ngày</p>
                    <Button secondary full onClick={handleAddToCart}>
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
