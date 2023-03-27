import { notFound } from 'next/navigation';

import getCollection from '~/app/utils/collections/getCollection';

import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';

export async function generateMetadata({ params }) {
    const collectionData = await getCollection(params.slug);

    return {
        title: collectionData.id ? collectionData.title : '404 - Không tìm thấy trang',
    };
}

export default async function Collection({ params }) {
    const collectionData = await getCollection(params.slug);
    if (!collectionData.id) return notFound();

    return (
        <>
            <HeroSection
                title={collectionData.title}
                description={collectionData.description}
                image={collectionData.image}
            />
            <ProductsSection data={collectionData.products} />
        </>
    );
}
