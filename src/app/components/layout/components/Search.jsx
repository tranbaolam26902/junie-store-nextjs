'use client';

// Third-party libs
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

// App's features
import { selectSearch, setIsClosing, setShowSearch } from '~/redux/features/searchSlice';

import iconSearch from '@/assets/icons/search.svg';
import iconClose from '@/assets/icons/close.svg';

// App's components
import Button from '../../Button';

export default function Search() {
    // Hooks
    const search = useSelector(selectSearch);
    const dispatch = useDispatch();

    // Component's event handlers
    const handleCloseSearch = () => {
        dispatch(setIsClosing(true));
        setTimeout(() => {
            dispatch(setShowSearch(false));
        }, 200);
    };

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
                            type='text'
                            autoFocus
                            placeholder='Bạn đang muốn tìm kiếm gì?'
                            className='flex-1 border-none outline-none'
                        />
                    </div>
                    <Button leftIcon={iconClose} iconSize={16} className='mr-[-8px]' onClick={handleCloseSearch} />
                </div>
                {/* End: Search header */}
            </div>
        </>
    );
}