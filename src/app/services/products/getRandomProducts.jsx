import axios from 'axios';
import { API_URL } from '../constants';

export default async function getRandomProducts(slug, limit, productSlug) {
    const { data } = await axios.get(`${API_URL}/products/random/${slug}/${limit}/${productSlug}`);

    return data.isSuccess ? data.result : null;
}
