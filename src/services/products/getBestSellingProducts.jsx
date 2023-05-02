import axios from '~/services/api/axios';

export default async function getBestSellingProducts(limit) {
    const { data } = await axios.get(`/api/products/best-selling/${limit}`);

    return data.isSuccess ? data.result : null;
}
