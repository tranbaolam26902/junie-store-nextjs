import axios from 'axios';

export default async function getCollections() {
    const { data } = await axios.get(`${process.env.API_ENDPOINT_URL}/api/collections`);

    return data.isSuccess ? data.result : null;
}
