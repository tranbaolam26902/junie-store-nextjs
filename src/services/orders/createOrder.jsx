import axios from '~/services/api/axios';

export default async function createOrder(order) {
    const { data } = await axios.post('/api/orders', order);

    return data.isSuccess ? data : null;
}
