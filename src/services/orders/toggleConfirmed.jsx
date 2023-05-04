import axios from '~/services/api/axios';

export default async function toggleConfirmed(id) {
    const { data } = await axios.post(`/api/orders/${id}`);

    return data.isSuccess ? data.result : null;
}
