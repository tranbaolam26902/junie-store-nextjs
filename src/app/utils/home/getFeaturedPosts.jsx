export default async function getFeaturedPosts() {
    const res = await fetch('https://junie-store-fake-api.vercel.app/featured-posts');

    return res.json();
}
