'use client';

// Third-party libs
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

// App's features
import { selectCart } from '~/redux/features/cartSlice';

// Asset files
import arrowLeft from '@/assets/icons/arrow-left.svg';

// App's components
import Button from '~/app/components/Button';
import axios from 'axios';

export default function FormSection() {
    // Hooks
    const router = useRouter();
    const cart = useSelector(selectCart);

    // Component's refs
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();
    const addressRef = useRef();
    const addressDescriptionRef = useRef();
    const notesRef = useRef();

    // Component's event handlers
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const orderData = {
            phoneNumber: phoneNumberRef.current.value,
            email: emailRef.current.value ?? null,
            name: nameRef.current.value,
            address: addressRef.current.value,
            addressDescription: addressDescriptionRef.current.value ?? null,
            notes: notesRef.current.value ?? null,
            orderProducts: cart.products.map((product) => ({
                productId: product.id,
                quantity: product.quantity,
                price: product.discount ? product.price * (1 - product.discount) : product.price,
            })),
        };

        const response = await axios.post('https://localhost:7106/api/orders', orderData);
        if (response.status === 200) window.alert('Gửi thành công!');
        else window.alert('Gửi thất bại, vui lòng thử lại!');
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <p className='text-2xl mb-8'>Thông tin đơn hàng</p>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor='phone-number' className='cursor-pointer'>
                        Số điện thoại
                    </label>
                    <input
                        ref={phoneNumberRef}
                        id='phone-number'
                        type='number'
                        placeholder='+84 792 815 452'
                        className='px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                    <span className='text-red'></span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email-address' className='cursor-pointer'>
                        Email<span className='ml-2 italic text-secondary/70'>(không bắt buộc)</span>
                    </label>
                    <input
                        ref={emailRef}
                        id='email-address'
                        type='text'
                        placeholder='junie-store@gmail.com.vn'
                        className='px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                    <span className='text-red'></span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='cursor-pointer'>
                        Tên
                    </label>
                    <input
                        ref={nameRef}
                        id='name'
                        type='text'
                        placeholder='Du Phong Linh'
                        className='px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                    <span className='text-red'></span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='address' className='cursor-pointer'>
                        Địa chỉ
                    </label>
                    <input
                        ref={addressRef}
                        id='address'
                        type='text'
                        placeholder='01 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt'
                        className='px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                    <span className='text-red'></span>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='address-detail' className='cursor-pointer'>
                        Căn hộ, phòng, v.v.<span className='ml-2 italic text-secondary/70'>(không bắt buộc)</span>
                    </label>
                    <input
                        ref={addressDescriptionRef}
                        id='address-detail'
                        type='text'
                        placeholder='Tầng 01 tòa nhà A27'
                        className='px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='notes' className='cursor-pointer'>
                        Ghi chú<span className='ml-2 italic text-secondary/70'>(không bắt buộc)</span>
                    </label>
                    <textarea
                        ref={notesRef}
                        id='notes'
                        type='text'
                        rows={4}
                        placeholder='Giao ngoài giờ hành chính'
                        className='resize-none px-4 pt-3 pb-2.5 text-lg border border-gray rounded'
                    />
                </div>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <Button
                    leftIcon={arrowLeft}
                    className='flex gap-2 text-base'
                    onClick={() => {
                        router.back();
                    }}
                >
                    Quay lại
                </Button>
                {cart.products.length > 0 ? (
                    <Button secondary type='submit'>
                        Xác nhận
                    </Button>
                ) : (
                    <Button disable>Xác nhận</Button>
                )}
            </div>
        </form>
    );
}
