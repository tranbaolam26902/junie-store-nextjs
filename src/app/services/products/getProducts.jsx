import axios from 'axios';
import { API_URL } from '../constants';

export default async function getProducts(slug) {
    const { data } = await axios.get(`${API_URL}/collections/${slug}/products`);

    return data.isSuccess ? data.result : null;
}
