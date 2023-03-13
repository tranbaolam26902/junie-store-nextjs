import Link from 'next/link';

import iconFacebook from '@/assets/icons/facebook.svg';
import iconInstagram from '@/assets/icons/instagram.svg';
import iconTiktok from '@/assets/icons/tiktok.svg';

import Button from '../../Button';

export default function FooterMain() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10'>
            <div>
                <p className='mb-5 text-sm font-bold tracking-wide uppercase'>Khám phá</p>
                <div className='flex flex-col gap-y-2'>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Bông tai bạc
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Bông tai ngọc trai
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Bông tai nụ
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Nhẫn
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Lắc tay
                    </Link>
                </div>
            </div>
            <div>
                <p className='mb-5 text-sm font-bold tracking-wide uppercase'>Chăm sóc khách hàng</p>
                <div className='flex flex-col gap-y-2'>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Đổi / trả & bảo hành
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Câu hỏi thường gặp
                    </Link>
                </div>
            </div>
            <div>
                <p className='mb-5 text-sm font-bold tracking-wide uppercase'>#Junie</p>
                <div className='flex flex-col gap-y-2'>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Beautiful blog
                    </Link>
                    <Link href='/' className='w-fit capitalize hover:opacity-70'>
                        Tuyển dụng
                    </Link>
                </div>
            </div>
            <div>
                <p className='mb-5 text-sm font-bold tracking-wide uppercase'>Liên hệ</p>
                <div className='flex flex-col gap-y-2'>
                    <Link href='/' className='w-fit hover:opacity-70'>
                        Hàng ngày 09-18H (T2-T7)
                    </Link>
                    <div className='w-fit'>
                        <span>Hotline:</span>
                        <a href='tel:0862 658 643' className='ml-1 underline hover:opacity-70'>
                            0862 658 643
                        </a>
                    </div>
                    <div className='w-fit'>
                        <span>Email:</span>
                        <a href='mailto:hello@junie.vn' className='ml-1 underline hover:opacity-70'>
                            hello@junie.vn
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:col-span-1 xl:col-span-2'>
                <p className='mb-5 text-sm font-bold tracking-wide uppercase'>Follow Junie</p>
                <div className='flex flex-col gap-y-2'>
                    <p>Nơi cập nhật những xu hướng thời trang và những chương trình sale mới nhất của Junie</p>
                    <div className='flex gap-x-2'>
                        <Button
                            href='https://www.facebook.com/wearing.junie'
                            target='_blank'
                            leftIcon={iconFacebook}
                            className='p-4 min-w-[52px] min-h-[52px] border border-secondary/20 rounded-sm hover:bg-secondary/10'
                        />
                        <Button
                            href='https://www.instagram.com/wearing.junie'
                            target='_blank'
                            leftIcon={iconInstagram}
                            className='p-4 min-w-[52px] min-h-[52px] border border-secondary/20 rounded-sm hover:bg-secondary/10'
                        />
                        <Button
                            href='https://www.tiktok.com/@wearing.junie'
                            target='_blank'
                            leftIcon={iconTiktok}
                            className='p-4 min-w-[52px] min-h-[52px] border border-secondary/20 rounded-sm hover:bg-secondary/10'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
