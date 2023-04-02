// Third-party libs
import { notFound } from 'next/navigation';

// App's features
import getCollection from '~/app/utils/collections/getCollection';
import getCollections from '~/app/utils/collections/getCollections';

// App's components
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';

// Dynamic metadata
export async function generateMetadata({ params }) {
    const collection = await getCollection(params.slug);

    return {
        title: collection.id ? collection.title : '404 - Không tìm thấy trang',
    };
}

export default async function Collection({ params }) {
    const collection = await getCollection(params.slug);
    if (!collection.id) return notFound();

    return (
        <>
            <HeroSection title={collection.title} description={collection.description} image={collection.image} />
            <ProductsSection data={collection.products} />
        </>
    );
}

// Static params to generate static pages
export async function generateStaticParams() {
    const collections = await getCollections();

    return collections.map((collection) => ({ slug: collection.id }));
}
