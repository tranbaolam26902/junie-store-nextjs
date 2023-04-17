'use client';

// Third-party libs
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

// App's features
import { setShowCart, setIsClosing as setIsClosingCart, selectCart, setProducts } from '~/redux/features/cartSlice';
import { setShowSearch, setIsClosing as setIsClosingSearch, selectSearch } from '~/redux/features/searchSlice';

// Asset files
import iconSearch from '@/assets/icons/search.svg';
import iconCart from '@/assets/icons/cart.svg';

// App's components
import Button from '../../Button';
import Cart from './Cart';
import Search from './Search';

export default function UserActions() {
    // Hooks
    const pathname = usePathname();
    const search = useSelector(selectSearch);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // Component's event handlers
    const handleShowSearch = () => {
        dispatch(setIsClosingSearch(false));
        dispatch(setShowSearch(true));
    };
    const handleShowCart = () => {
        dispatch(setIsClosingCart(false));
        dispatch(setShowCart(true));
    };

    useEffect(() => {
        // Get user cart products on first load
        const products = JSON.parse(localStorage.getItem('cart-products'));
        if (products) dispatch(setProducts(products));
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        document.body.style.overflow = cart.showCart || search.showSearch ? 'hidden' : 'overlay';
    }, [cart.showCart, search.showSearch]);

    return (
        <div className='flex flex-1 justify-end gap-x-2 mr-[-8px]'>
            <Button leftIcon={iconSearch} onClick={handleShowSearch} />
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
            {search.showSearch && <Search />}
        </div>
    );
}
