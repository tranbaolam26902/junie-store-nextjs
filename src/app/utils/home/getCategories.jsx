export default async function getCategories() {
    const res = await fetch('https://junie-store-fake-api.vercel.app/categories');

    return res.json();
}
