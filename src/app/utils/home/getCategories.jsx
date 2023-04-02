import { API_URL } from '../constants';

export default async function getCategories() {
    const res = await fetch(`${API_URL}/categories`);

    return res.json();
}
