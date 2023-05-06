import axios from '~/services/api/axios';

export default async function getProducts(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/api/collections/${slug}/products`, {
        next: {
            revalidate: 1,
        },
    });

    const response = await res.json();

    return response.isSuccess ? response.result : null;
}
