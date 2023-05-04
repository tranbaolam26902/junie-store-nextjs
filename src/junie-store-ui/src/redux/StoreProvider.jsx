'use client';

// Third-party libs
import { Provider } from 'react-redux';

// App's features
import { store } from './store';

export default function StoreProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
