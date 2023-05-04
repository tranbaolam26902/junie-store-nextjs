'use client';

// Third-party libs
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

// App's features
import { setKeyword, setIsNotConfirmed, setPageNumber } from '~/redux/features/orderSlice';

// App's components
import Button from '~/app/components/Button';

export default function OrderFilterPane() {
    // Hooks
    const dispatch = useDispatch();

    // Component's refs
    const keywordRef = useRef();
    const isNotConfirmedRef = useRef();

    // Component's event handlers
    const handleFilterProducts = () => {
        dispatch(setKeyword(keywordRef.current.value));
        dispatch(setIsNotConfirmed(isNotConfirmedRef.current.checked));
        dispatch(setPageNumber(1));
    };
    const handleClearFilter = () => {
        keywordRef.current.value = '';
        isNotConfirmedRef.current.checked = false;
        handleFilterProducts();
    };

    return (
        <section className='flex flex-wrap gap-4 items-center'>
            <div className='flex flex-wrap gap-4'>
                <input
                    ref={keywordRef}
                    type='text'
                    id='keyword'
                    name='keyword'
                    placeholder='Enter keyword...'
                    className='flex-1 sm:flex-auto px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black'
                />
            </div>
            <div className='flex gap-4'>
                <div className='cursor-pointer'>
                    <input
                        ref={isNotConfirmedRef}
                        type='checkbox'
                        id='is-not-confirmed'
                        name='is-not-confirmed'
                        className='cursor-pointer'
                    />
                    <label htmlFor='is-not-confirmed' className='inline-block ml-1 cursor-pointer'>
                        Not confirmed
                    </label>
                </div>
            </div>
            <div className='flex flex-wrap gap-2'>
                <Button secondary onClick={handleFilterProducts}>
                    Filter
                </Button>
                <Button secondary onClick={handleClearFilter}>
                    Clear
                </Button>
            </div>
        </section>
    );
}
