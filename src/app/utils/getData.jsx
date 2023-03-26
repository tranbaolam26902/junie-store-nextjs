export default async function getData(url) {
    const res = await fetch(url, { next: { revalidate: 10 } });

    return res.json();
}
