import axios from 'axios';
import { API_URL } from '../constants';

export default async function getCollections() {
    const response = await axios.get(`${API_URL}/collections`);
    const data = response.data;

    return data.isSuccess ? data.result : null;
}
