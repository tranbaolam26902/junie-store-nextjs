// Third-party libs
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

// App's features
import { setIsClosing, setShowSearch } from '~/redux/features/searchSlice';

// Assets files
import iconArrow from '@/assets/icons/arrow-right.svg';

export default function SearchProduct({ product }) {
    // Hooks
    const dispatch = useDispatch();

    return (
        <Link
            href={`/collections/${product.collection.slug}/${product.slug}`}
            className='group relative flex gap-6 items-center'
            onClick={() => {
                dispatch(setIsClosing(true));
                setTimeout(() => {
                    dispatch(setShowSearch(false));
                }, 200);
            }}
        >
            <Image src={product.images[0].path} alt='product-image' width={92} height={115} className='rounded' />
            <div className='flex-1 flex flex-col gap-1'>
                <span>{product.name}</span>
                {product.discount ? (
                    <div className='flex gap-3'>
                        <span className='text-red'>
                            {new Intl.NumberFormat('vi-VN').format(product.price * (1 - product.discount))}
                            <sup className='ml-0.5 underline'>đ</sup>
                        </span>
                        <span className='line-through opacity-70'>
                            {new Intl.NumberFormat('vi-VN').format(product.price)}
                            <sup className='ml-0.5 underline'>đ</sup>
                        </span>
                    </div>
                ) : (
                    <span>
                        {new Intl.NumberFormat('vi-VN').format(product.price)}
                        <sup>đ</sup>
                    </span>
                )}
            </div>
            <Image
                src={iconArrow}
                alt='icon'
                className='transition duration-200 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
            />
        </Link>
    );
}
