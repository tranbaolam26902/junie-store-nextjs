export default async function getCollection(slug) {
    const res = await fetch(`https://junie-store-fake-api.vercel.app/${slug}`);

    return res.json();
}
