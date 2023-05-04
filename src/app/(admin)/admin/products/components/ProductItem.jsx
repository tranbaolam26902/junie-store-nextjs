// Third-party libs
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

// App's features
import { selectProduct, setIsChange } from '~/redux/features/productSlice';

// App's services
import deleteProductBySlug from '~/services/products/deleteProductBySlug';

// App's components
import Button from '~/app/components/Button';

export default function ProductItem({ product }) {
    // Hooks
    const dispatch = useDispatch();

    // Global states
    const productState = useSelector(selectProduct);

    // Component's event handlers
    const handleDeleteProduct = async () => {
        if (window.confirm('Confirm delete product?')) {
            await deleteProductBySlug(product.slug);
            dispatch(setIsChange(!productState.isChange));
        }
    };

    return (
        <div className='w-[944px] lg:w-full grid grid-cols-12 p-4 items-center'>
            <Link href={`/admin/products/${product.slug}`} className='group col-span-5 flex gap-4 items-center'>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${product?.images[0]?.path}`}
                    alt='product-image'
                    width={64}
                    height={80}
                    className='rounded shadow'
                />
                <span className='transition duration-200 group-hover:opacity-80 group-hover:underline'>
                    {product.name}
                </span>
            </Link>
            <div className='col-span-2 text-center'>{product.collection.title}</div>
            <div className='col-span-1 text-center'>{product.quantity}</div>
            <div className='col-span-1 text-center'>{new Intl.NumberFormat('vi-VN').format(product.price)}</div>
            <div className='col-span-1 text-center'>{product.discount * 100}%</div>
            <div className='col-span-1 text-center'>
                <Button
                    href={`/admin/products/${product.slug}`}
                    text
                    className='transition duration-200 hover:opacity-70'
                >
                    Edit
                </Button>
            </div>
            <div className='col-span-1 text-center'>
                <Button
                    text
                    className='text-red transition duration-200 hover:opacity-70'
                    onClick={handleDeleteProduct}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}
