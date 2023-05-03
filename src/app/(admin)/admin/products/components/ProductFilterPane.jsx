'use client';

// Third-party libs
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

// App's features
import {
    setKeyword,
    setIsDiscounted,
    setIsOutOfStock,
    setCollectionId,
    setPageNumber,
} from '~/redux/features/productSlice';

// App's services
import { getCollections } from '~/services';

// App's components
import Button from '~/app/components/Button';

export default function ProductFilterPane() {
    // Hooks
    const dispatch = useDispatch();

    // Component's states
    const [collections, setCollections] = useState([]);

    // Component's refs
    const keywordRef = useRef();
    const collectionRef = useRef();
    const discountRef = useRef();
    const outOfStockRef = useRef();

    // Component's event handlers
    const handleFilterProducts = () => {
        dispatch(setKeyword(keywordRef.current.value));
        dispatch(setCollectionId(collectionRef.current.value));
        dispatch(setIsDiscounted(discountRef.current.checked));
        dispatch(setIsOutOfStock(outOfStockRef.current.checked));
        dispatch(setPageNumber(1));
    };
    const handleClearFilter = () => {
        keywordRef.current.value = '';
        collectionRef.current.value = '';
        discountRef.current.checked = false;
        outOfStockRef.current.checked = false;
        handleFilterProducts();
    };

    // useEffects
    useEffect(() => {
        getSelectData();

        async function getSelectData() {
            const data = await getCollections();
            setCollections(data);
        }
    }, []);

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
                <select
                    ref={collectionRef}
                    defaultValue=''
                    className='flex-1 sm:flex-auto px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black appearance-none'
                >
                    <option value=''>-- Select collection --</option>
                    {collections.map((collection, index) => (
                        <option key={index} value={collection.id}>
                            {collection.title}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex gap-4'>
                <div className='cursor-pointer'>
                    <input ref={discountRef} type='checkbox' id='discount' name='discount' className='cursor-pointer' />
                    <label htmlFor='discount' className='inline-block ml-1 cursor-pointer'>
                        Discount
                    </label>
                </div>
                <div className='cursor-pointer'>
                    <input
                        ref={outOfStockRef}
                        type='checkbox'
                        id='out-of-stock'
                        name='out-of-stock'
                        className='cursor-pointer'
                    />
                    <label htmlFor='out-of-stock' className='inline-block ml-1 cursor-pointer'>
                        Out of stock
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
                <Button accent>Add</Button>
            </div>
        </section>
    );
}
