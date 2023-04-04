// Third-party libs
import { notFound } from 'next/navigation';

// App's features
import getProduct from '~/app/services/products/getProduct';
import getProducts from '~/app/services/products/getProducts';

// App's components
import Breadcrumb from './components/Breadcrumb';
import ProductInfo from './components/ProductInfo';
import ProductImages from './components/ProductImages';
import ProductDescription from './components/ProductDescription';

// Dynamic metadata
export async function generateMetadata({ params }) {
    const product = await getProduct(params.productSlug);

    return {
        title: product ? product.name : '404 - Không tìm thấy trang',
    };
}

export default async function Product({ params }) {
    // Get data
    const product = await getProduct(params.productSlug);
    if (!product) return notFound();

    return (
        <>
            <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
                <Breadcrumb name={product.name} />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-20 2xl:gap-x-40'>
                    <ProductImages images={product.images} />
                    <ProductInfo product={product} />
                </div>
                <div className='grid lg:grid-cols-6'>
                    <ProductDescription product={product} />
                </div>
            </div>
        </>
    );
}

// Static params to generate static pages
export async function generateStaticParams() {
    const products = await getProducts();

    return products.map((product) => ({
        collectionSlug: product.collection.slug,
        productSlug: product.slug,
    }));
}
