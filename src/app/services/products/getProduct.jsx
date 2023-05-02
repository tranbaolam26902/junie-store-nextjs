import axios from '~/app/services/api/axios';

export default async function getProduct(slug) {
    const { data } = await axios.get(`/api/products/${slug}`);

    return data.isSuccess ? data.result : null;
}
