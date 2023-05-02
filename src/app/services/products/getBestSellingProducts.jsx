import axios from 'axios';

export default async function getBestSellingProducts(limit) {
    const { data } = await axios.get(`${process.env.API_ENDPOINT_URL}/api/products/best-selling/${limit}`);

    return data.isSuccess ? data.result : null;
}
