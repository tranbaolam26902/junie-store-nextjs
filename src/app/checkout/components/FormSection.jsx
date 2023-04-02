'use client';

// Third-party libs
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

// App's features
import { selectCart } from '~/redux/features/cartSlice';

// Asset files
import arrowLeft from '@/assets/icons/arrow-left.svg';

// App's components
import Button from '~/app/components/Button';

export default function FormSection() {
    // Hooks
    const router = useRouter();
    const cart = useSelector(selectCart);

    // Component's event handlers
    const handleSubmitForm = (e) => {
        e.preventDefault();
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
