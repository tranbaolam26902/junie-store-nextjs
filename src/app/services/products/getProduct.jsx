import axios from 'axios';

export default async function getProduct(slug) {
    const { data } = await axios.get(`${process.env.API_ENDPOINT_URL}/api/products/${slug}`);

    return data.isSuccess ? data.result : null;
}
