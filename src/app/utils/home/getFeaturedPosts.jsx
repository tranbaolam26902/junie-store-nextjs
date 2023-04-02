import { API_URL } from '../constants';

export default async function getFeaturedPosts() {
    const res = await fetch(`${API_URL}/featured-posts`);

    return res.json();
}
