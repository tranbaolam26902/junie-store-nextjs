export default async function getFeaturedPosts() {
    const res = await fetch('https://junie-store-fake-api.vercel.app/featured-posts', { cache: 'no-store' });

    return res.json();
}
