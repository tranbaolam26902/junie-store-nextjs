import axios from 'axios';
import { API_URL } from '../constants';

export default async function getCollections() {
    const { data } = await axios.get(`${API_URL}/collections`);

    return data.isSuccess ? data.result : null;
}
