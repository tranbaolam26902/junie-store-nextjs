import { notFound } from 'next/navigation';

import getCollection from '~/app/utils/collections/getCollection';
import getCollections from '~/app/utils/collections/getCollections';

import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';

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

export async function generateStaticParams() {
    const collections = await getCollections();

    return collections.map((collection) => ({ slug: collection.id }));
}
