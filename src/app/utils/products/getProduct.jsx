import { API_URL } from '../constants';

export default async function getProduct(slug, id) {
    const res = await fetch(`${API_URL}/${slug}/${id}`);

    return res.json();
}
