export default async function getCollection(slug) {
    const res = await fetch(`https://junie-store-fake-api.vercel.app/${slug}`, { cache: 'no-store' });

    return res.json();
}
