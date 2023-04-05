import axios from 'axios';
import { API_URL } from '../constants';

export default async function getBestSellingProducts(limit) {
    const { data } = await axios.get(`${API_URL}/products/best-selling/${limit}`);

    return data.isSuccess ? data.result : null;
}
