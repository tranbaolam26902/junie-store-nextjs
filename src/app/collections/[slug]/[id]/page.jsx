import { notFound } from 'next/navigation';

import getProduct from '~/app/utils/products/getProduct';

import Breadcrumb from './components/Breadcrumb';
import ProductInfo from './components/ProductInfo';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';
import getCollections from '~/app/utils/collections/getCollections';

export async function generateMetadata({ params }) {
    const product = await getProduct(params.slug, params.id);

    return {
        title: product.id ? product.name : '404 - Không tìm thấy trang',
    };
}

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

export async function generateStaticParams() {
    const collections = await getCollections();
    const result = [];

    collections.map((collection) => {
        collection.products.map((product) => {
            result.push({
                slug: collection.id,
                id: product.id.toString(),
            });
        });
    });

    return result;
}
