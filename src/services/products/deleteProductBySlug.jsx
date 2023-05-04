import axios from '~/services/api/axios';

export default async function deleteProductBySlug(slug) {
    const { data } = await axios.post(`/api/products/delete/${slug}`);

    return data.isSuccess ? data.result : null;
}
