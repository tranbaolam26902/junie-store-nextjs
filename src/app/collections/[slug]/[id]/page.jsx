import { notFound } from 'next/navigation';

import getProduct from '~/app/utils/products/getProduct';

import Breadcrumb from './components/Breadcrumb';
import ProductInfo from './components/ProductInfo';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';

export default async function Product({ params }) {
    const product = await getProduct(params.slug, params.id);
    if (!product.id) return notFound();

    return (
        <>
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <Breadcrumb name={product.name} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-20 2xl:gap-x-40'>
                    <ProductImages data={product.images} />
                    <ProductInfo data={product} />
                </div>
                <div className='grid lg:grid-cols-6'>
                    <ProductDescription data={product} />
                </div>
            </div>
        </>
    );
}
