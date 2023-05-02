import axios from 'axios';

export default async function getProducts(slug) {
    const { data } = await axios.get(`${process.env.API_ENDPOINT_URL}/api/collections/${slug}/products`);

    return data.isSuccess ? data.result : null;
}
