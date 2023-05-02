import axios from '~/services/api/axios';

export default async function getCollection(slug) {
    const { data } = await axios.get(`/api/collections/${slug}`);

    return data.isSuccess ? data.result : null;
}
