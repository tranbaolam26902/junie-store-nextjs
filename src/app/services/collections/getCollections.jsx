import axios from '~/app/services/api/axios';

export default async function getCollections() {
    const { data } = await axios.get('/api/collections');

    return data.isSuccess ? data.result : null;
}
