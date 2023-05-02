import axios from '~/app/services/api/axios';

export default async function getProducts(slug) {
    const { data } = await axios.get(`/api/collections/${slug}/products`);

    return data.isSuccess ? data.result : null;
}
