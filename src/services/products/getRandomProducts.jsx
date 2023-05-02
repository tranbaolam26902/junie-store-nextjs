import axios from '~/services/api/axios';

export default async function getRandomProducts(slug, limit, productSlug) {
    const { data } = await axios.get(`/api/products/random/${slug}/${limit}/${productSlug}`);

    return data.isSuccess ? data.result : null;
}
