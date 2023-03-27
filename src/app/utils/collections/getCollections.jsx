export default async function getCollections() {
    const res = await fetch('https://junie-store-fake-api.vercel.app/collections');

    return res.json();
}
