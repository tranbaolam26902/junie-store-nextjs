import axios from '~/services/api/axios';

export default async function getProduct(slug) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/api/products/${slug}`, {
        next: {
            revalidate: 1,
        },
    });

    const response = await res.json();

    return response.isSuccess ? response.result : null;
}
