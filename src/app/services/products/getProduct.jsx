import axios from 'axios';
import { API_URL } from '../constants';

export default async function getProduct(slug) {
    const { data } = await axios.get(`${API_URL}/products/${slug}`);

    return data.isSuccess ? data.result : null;
}
