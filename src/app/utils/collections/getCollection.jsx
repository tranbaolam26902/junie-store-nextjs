import { API_URL } from '../constants';

export default async function getCollection(slug) {
    const res = await fetch(`${API_URL}/collections/${slug}`);

    return res.json();
}
