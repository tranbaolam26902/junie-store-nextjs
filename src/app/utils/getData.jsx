export default async function getData(url) {
    const res = await fetch(url, { next: { revalidate: 1 } });

    return res.json();
}
