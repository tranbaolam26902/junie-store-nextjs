import axios from 'axios';
import { API_URL } from '../constants';

export default async function getCollection(slug) {
    const { data } = await axios.get(`${API_URL}/collections/${slug}`);

    return data.isSuccess ? data.result : null;
}
