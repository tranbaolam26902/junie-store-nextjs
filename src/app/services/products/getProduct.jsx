import axios from 'axios';
import { API_URL } from '../constants';

export default async function getProduct(slug) {
    const response = await axios.get(`${API_URL}/products/${slug}`);
    const data = response.data;

    return data.isSuccess ? data.result : null;
}
