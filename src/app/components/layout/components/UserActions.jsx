'use client';

// Third-party libs
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

// App's features
import { setShowCart, setIsClosing, selectCart } from '~/redux/features/cartSlice';

// Asset files
import iconSearch from '@/assets/icons/search.svg';
import iconCart from '@/assets/icons/cart.svg';

// App's components
import Button from '../../Button';
import Cart from './Cart';

export default function UserActions() {
    // Hooks
    const pathname = usePathname();
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // Component's event handlers
    const handleShowCart = () => {
        dispatch(setIsClosing(false));
        dispatch(setShowCart(true));
    };

    return (
        <div className='flex flex-1 justify-end gap-x-2 mr-[-8px]'>
            <Button leftIcon={iconSearch} />
            {pathname !== '/checkout' && (
                <Button leftIcon={iconCart} className='relative' onClick={handleShowCart}>
                    {cart.products.length > 0 && (
                        <div className='absolute top-0.5 right-[-6px] pt-px w-5 h-5 text-[12px] text-white bg-black rounded-full'>
                            {cart.products.length}
                        </div>
                    )}
                </Button>
            )}
            {cart.showCart && <Cart />}
        </div>
    );
}
