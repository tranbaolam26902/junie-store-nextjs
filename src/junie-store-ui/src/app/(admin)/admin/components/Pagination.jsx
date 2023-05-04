'use client';

// Third-party libs
import { useDispatch } from 'react-redux';

// Assets files
import iconLeftArrow from '@/assets/icons/arrow-left.svg';
import iconRightArrow from '@/assets/icons/arrow-right.svg';

// App's features
import { decreasePageNumber, increasePageNumber } from '~/redux/features/productSlice';

// App's components
import Button from '~/app/components/Button';

export default function Pagination({ metadata }) {
    // Hooks
    const dispatch = useDispatch();

    // Component's event handlers
    const handleNextPage = () => {
        if (metadata.hasNextPage) dispatch(increasePageNumber());
    };
    const handlePrevPage = () => {
        if (metadata.hasPreviousPage) dispatch(decreasePageNumber());
    };

    return (
        <section>
            <div className='flex gap-4 items-center'>
                <Button
                    leftIcon={iconLeftArrow}
                    className={`transition duration-200 hover:opacity-70 ${
                        !metadata.hasPreviousPage ? 'opacity-50 cursor-auto' : ''
                    }`}
                    onClick={handlePrevPage}
                >
                    <span className='ml-2'>Prev</span>
                </Button>
                <div className='flex gap-1 pt-1 text-sm text-secondary'>
                    <span>Page</span>
                    <span>{metadata.pageCount !== 0 ? metadata.pageNumber : 0}</span>
                    <span>of</span>
                    <span>{metadata.pageCount}</span>
                </div>
                <Button
                    rightIcon={iconRightArrow}
                    className={`transition duration-200 hover:opacity-70 ${
                        !metadata.hasNextPage ? 'opacity-50 cursor-auto' : ''
                    }`}
                    onClick={handleNextPage}
                >
                    <span className='mr-2'>Next</span>
                </Button>
            </div>
        </section>
    );
}
