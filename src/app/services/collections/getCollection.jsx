import axios from 'axios';

export default async function getCollection(slug) {
    const { data } = await axios.get(`${process.env.API_ENDPOINT_URL}/api/collections/${slug}`);

    return data.isSuccess ? data.result : null;
}
