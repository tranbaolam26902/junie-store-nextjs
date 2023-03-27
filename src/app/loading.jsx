import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-[100] flex items-center justify-center w-screen h-screen bg-white'>
            <div>
                <div className={styles['loadingio-spinner-dual-ring-qo59o73r0tl']}>
                    <div className={styles['ldio-0m5i1demrio']}>
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
