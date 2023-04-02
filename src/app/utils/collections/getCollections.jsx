import { API_URL } from '../constants';

export default async function getCollections() {
    const res = await fetch(`${API_URL}/collections`);

    return res.json();
}
