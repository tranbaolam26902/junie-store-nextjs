// Third-party libs
import { notFound } from 'next/navigation';

// App's features
import getCollection from '~/app/utils/collections/getCollection';
import getCollections from '~/app/utils/collections/getCollections';
import getProducts from '~/app/utils/products/getProducts';

// App's components
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';

// Dynamic metadata
export async function generateMetadata({ params }) {
    const collection = await getCollection(params.slug);

    return {
        title: collection ? collection.title : '404 - Không tìm thấy trang',
    };
}

export default async function Collection({ params }) {
    // Get data
    const collection = await getCollection(params.slug);
    if (!collection) return notFound();
    const products = await getProducts(params.slug);

    return (
        <>
            <HeroSection collection={collection} />
            {products.length > 0 ? (
                <ProductsSection products={products} />
            ) : (
                <p className='mx-auto my-16 text-center'>Chưa có sản phẩm</p>
            )}
        </>
    );
}

// Static params to generate static pages
export async function generateStaticParams() {
    const collections = await getCollections();

    return collections.map((collection) => ({ slug: collection.slug }));
}
