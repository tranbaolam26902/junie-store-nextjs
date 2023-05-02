// App's components
import Button from '~/app/components/Button';

export default function Purchased() {
    return (
        <div className='flex flex-col items-center justify-center mt-48 md:mt-60 mb-40 mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <p className='text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold text-accent/70 text-center uppercase'>
                Junie Cảm ơn!
            </p>
            <div className='my-4 md:my-6 xl:my-8 text-md md:text-xl lg:text-2xl text-center text-secondary/70'>
                <p>Đơn hàng của bạn đã được ghi nhận.</p>
                <p>Junie sẽ sớm liên hệ với bạn để xác nhận đơn hàng!</p>
            </div>
            <Button href='/' secondary>
                Trở lại trang chủ
            </Button>
        </div>
    );
}
