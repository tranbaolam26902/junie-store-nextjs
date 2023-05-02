'use client';

// Third-party libs
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

// styles
import styles from '~/app/loading.module.scss';

// App's hooks
import useDebounce from '~/hooks/useDebounce';

// App's features
import { selectSearch, setIsClosing, setShowSearch } from '~/redux/features/searchSlice';

// App's services
import axios from '~/services/api/axios';

// Assets files
import iconSearch from '@/assets/icons/search.svg';
import iconClose from '@/assets/icons/close.svg';

// App's components
import Button from '~/app/components/Button';
import SearchProduct from './SearchProduct';

export default function Search() {
    // Component's states
    const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    // Hooks
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();
    const debounceKeyword = useDebounce(keyword, 500);

    // Component's functions
    const searchProduct = (keyword) => {
        if (keyword.trim() === '') {
            setProducts([]);
            return;
        }
        setIsLoading(true);
        setProducts([]);
        axios
            .post('/api/products/search', { keyword })
            .then(({ data }) => {
                setProducts(data.result);
            })
            .finally(() => {
                setIsLoading(false);
                setIsCompleted(true);
            });
    };

    // Component's event handlers
    const handleCloseSearch = () => {
        dispatch(setIsClosing(true));
        setTimeout(() => {
            dispatch(setShowSearch(false));
        }, 200);
    };

    useEffect(() => {
        searchProduct(keyword);
        // eslint-disable-next-line
    }, [debounceKeyword]);

    return (
        <>
            {/* Start: Search's overlay */}
            <div
                className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                    search.isClosing ? 'animate-fade-out' : 'animate-fade-in'
                }`}
                onClick={handleCloseSearch}
            ></div>
            {/* End: Search's overlay */}
            {/* Start: Search */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 overflow-y-auto no-scrollbar overscroll-contain flex flex-col w-[90vw] max-w-[500px] h-screen bg-white ${
                    search.isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
                } `}
            >
                {/* Start: Search header */}
                <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray'>
                    <div className='flex flex-1 items-center gap-2'>
                        <span>
                            <Image src={iconSearch} alt='icon-search' />
                        </span>
                        <input
                            value={keyword}
                            type='text'
                            autoFocus
                            placeholder='Bạn đang muốn tìm kiếm gì?'
                            className='flex-1 border-none outline-none'
                            onChange={(e) => {
                                setKeyword(e.target.value);
                                setIsCompleted(false);
                            }}
                        />
                    </div>
                    <Button leftIcon={iconClose} iconSize={16} className='mr-[-8px]' onClick={handleCloseSearch} />
                </div>
                {/* End: Search header */}
                {/* Start: Search result */}
                <div className='overflow-y-auto flex-1 flex flex-col gap-6 p-6 md:px-10'>
                    {isLoading ? (
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
                    ) : products.length === 0 && keyword.trim() !== '' && isCompleted ? (
                        <span>Không tìm thấy sản phẩm</span>
                    ) : (
                        products.length > 0 && (
                            <span>
                                Tìm thấy <b>{products.length}</b> sản phẩm
                            </span>
                        )
                    )}
                    {products.map((product, index) => (
                        <SearchProduct key={index} product={product} />
                    ))}
                </div>
                {/* End: Search result */}
            </div>
        </>
    );
}
