export default async function getProduct(slug, id) {
    const res = await fetch(`https://junie-store-fake-api.vercel.app/${slug}/${id}`);

    return res.json();
}
