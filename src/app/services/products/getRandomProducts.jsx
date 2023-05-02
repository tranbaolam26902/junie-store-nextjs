import axios from 'axios';

export default async function getRandomProducts(slug, limit, productSlug) {
    const { data } = await axios.get(
        `${process.env.API_ENDPOINT_URL}/api/products/random/${slug}/${limit}/${productSlug}`,
    );

    return data.isSuccess ? data.result : null;
}
