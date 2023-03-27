export default async function getCollection(slug) {
    const res = await fetch(`https://junie-store-fake-api.vercel.app/collections/${slug}`);

    return res.json();
}
