import Button from '~/app/components/Button';

export default function NotFound() {
    return (
        <div className='relative flex flex-col items-center justify-center mt-80 mb-40'>
            <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-[224px] font-bold opacity-10'>
                404
            </p>
            <p className='text-2xl md:text-3xl xl:text-4xl font-bold'>Không tìm thấy trang</p>
            <p className='my-4 md:my-6 xl:my-8'>Xin lỗi, trang này không tồn tại</p>
            <Button href='/' secondary>
                Trở lại trang chủ
            </Button>
        </div>
    );
}
