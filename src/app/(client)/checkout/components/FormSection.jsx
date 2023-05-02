'use client';

// Third-party libs
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

// App's features
import { clearProducts, selectCart } from '~/redux/features/cartSlice';

// App's services
import createOrder from '~/services/orders/createOrder';

// Asset files
import arrowLeft from '@/assets/icons/arrow-left.svg';

// App's components
import Button from '~/app/(client)/components/Button';
import Input from '~/app/(client)/components/Input';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function FormSection() {
    // Hooks
    const router = useRouter();
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // Component's states
    const [isValid, setIsValid] = useState(false);
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [addressMessage, setAddressMessage] = useState('');
    const [addressDescriptionMessage, setAddressDescriptionMessage] = useState('');

    // Component's refs
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();
    const addressRef = useRef();
    const addressDescriptionRef = useRef();
    const notesRef = useRef();

    // Component's functions
    const validateOrder = () => {
        if (phoneNumberRef.current.value === '') setPhoneNumberMessage('Vui lòng nhập số điện thoại!');
        if (phoneNumberRef.current.value.length > 16)
            setPhoneNumberMessage('Số điện thoại không được vượt quá 16 chữ số!');
        if (emailRef.current.value !== '' && !EMAIL_REGEX.test(emailRef.current.value))
            setEmailMessage('Vui lòng nhập địa chỉ email hợp lệ!');
        if (emailRef.current.value.length > 64) setEmailMessage('Email không được vượt quá 64 ký tự!');
        if (nameRef.current.value === '') setNameMessage('Vui lòng nhập tên người nhận!');
        if (nameRef.current.value.length > 64) setNameMessage('Tên người nhận không được vượt quá 64 ký tự!');
        if (addressRef.current.value === '') setAddressMessage('Vui lòng nhập địa chỉ nhận hàng!');
        if (addressRef.current.value.length > 512)
            setAddressMessage('Địa chỉ nhận hàng không được vượt quá 512 ký tự!');
        if (addressDescriptionRef.current.value.length > 512)
            setAddressDescriptionMessage('Mô tả địa chỉ không được vượt quá 512 ký tự!');

        if (
            phoneNumberRef.current.value === '' ||
            phoneNumberRef.current.value.length > 16 ||
            (emailRef.current.value !== '' && !EMAIL_REGEX.test(emailRef.current.value)) ||
            emailRef.current.value.length > 64 ||
            nameRef.current.value === '' ||
            nameRef.current.value.length > 64 ||
            addressRef.current.value === '' ||
            addressRef.current.value.length > 512 ||
            addressDescriptionRef.current.value.length > 512
        )
            return false;
        return true;
    };

    // Component's event handlers
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!validateOrder()) return;

        const order = {
            phoneNumber: phoneNumberRef.current.value,
            email: emailRef.current.value,
            name: nameRef.current.value,
            address: addressRef.current.value,
            addressDescription: addressDescriptionRef.current.value,
            notes: notesRef.current.value,
            orderProducts: cart.products.map((product) => ({
                productId: product.id,
                quantity: product.quantity,
                price: product.discount ? product.price * (1 - product.discount) : product.price,
            })),
        };
        const data = await createOrder(order);

        if (data.isSuccess) {
            dispatch(clearProducts());
            router.push('/purchased');
        } else window.alert('Gửi thất bại, vui lòng thử lại!');
    };

    useEffect(() => {
        if (cart.products.length > 0) setIsValid(true);
        else setIsValid(false);
        // eslint-disable-next-line
    }, [cart.products]);

    return (
        <form onSubmit={handleSubmitForm}>
            <p className='text-2xl mb-8'>Thông tin đơn hàng</p>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <Input
                        ref={phoneNumberRef}
                        id='phone-number'
                        name='phone-number'
                        type='number'
                        label='Số điện thoại'
                        placeholder='+84 792 815 452'
                        message={phoneNumberMessage}
                        onChange={() => {
                            setPhoneNumberMessage('');
                        }}
                    />
                </div>
                <div className='flex flex-col'>
                    <Input
                        ref={nameRef}
                        id='name'
                        name='name'
                        label='Tên'
                        placeholder='Du Phong Linh'
                        message={nameMessage}
                        onChange={() => {
                            setNameMessage('');
                        }}
                    />
                </div>
                <div className='flex flex-col'>
                    <Input
                        ref={addressRef}
                        id='address'
                        name='address'
                        label='Địa chỉ nhận hàng'
                        placeholder='01 Phù Đổng Thiên Vương, Phường 8, TP. Đà Lạt'
                        message={addressMessage}
                        onChange={() => {
                            setAddressMessage('');
                        }}
                    />
                </div>
                <div className='flex flex-col'>
                    <Input
                        ref={addressDescriptionRef}
                        id='address-description'
                        name='address-description'
                        label='Căn hộ, phòng, v.v.'
                        placeholder='Tầng 01 tòa nhà A7'
                        optional
                        message={addressDescriptionMessage}
                        onChange={() => {
                            setAddressDescriptionMessage('');
                        }}
                    />
                </div>
                <div className='flex flex-col'>
                    <Input
                        ref={emailRef}
                        id='email'
                        name='email'
                        label='Email'
                        placeholder='duphonglinh@gmail.com'
                        optional
                        message={emailMessage}
                        onChange={() => {
                            setEmailMessage('');
                        }}
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
                    type='button'
                    leftIcon={arrowLeft}
                    className='flex gap-2 text-base'
                    onClick={() => {
                        router.back();
                    }}
                >
                    Quay lại
                </Button>
                {isValid ? (
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
