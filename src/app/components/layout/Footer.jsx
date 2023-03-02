import Link from 'next/link';

import iconFacebook from '@/assets/icons/facebook.svg';
import iconInstagram from '@/assets/icons/instagram.svg';
import iconTiktok from '@/assets/icons/tiktok.svg';
import iconCod from '@/assets/icons/cod.svg';
import iconBank from '@/assets/icons/bank.svg';
import iconMomo from '@/assets/icons/momo.svg';
import iconAmex from '@/assets/icons/amex.svg';
import iconMasterCard from '@/assets/icons/mastercard.svg';
import iconVisa from '@/assets/icons/visa.svg';

import Button from '../Button';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className='bg-gray'>
            <div className='mx-auto px-6 md:px-10 py-16 max-w-screen-2xl'>
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
                                Lắc tay
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
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 mt-12'>
                    <div>
                        <div className='ml-[-8px]'>
                            <Button text className='inline-block text-xs'>
                                Thanh toán
                            </Button>
                            <Button text className='inline-block text-xs'>
                                Vận chuyển
                            </Button>
                            <Button text className='inline-block text-xs'>
                                Đổi trả
                            </Button>
                            <Button text className='inline-block text-xs'>
                                Chính sách bảo mật
                            </Button>
                            <Button text className='inline-block text-xs'>
                                Điều khoản dịch vụ
                            </Button>
                        </div>
                        <p className='mt-3 text-xs text-[#000000b3]'>
                            Hộ kinh doanh Junie | 742 Lê Thanh Nghị, TP. Hải Dương, Hải Dương | ĐK số 04A8018757 cấp
                            ngày 07/10/2021 tại Hải Dương | MST: 8411247921
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:flex sm:items-center xl:ml-auto'>
                        <span className='mr-4 pt-1 text-sm text-[#000000b3]'>Chấp nhận thanh toán</span>
                        <div className='flex gap-x-2'>
                            <Image src={iconCod} alt='payment-method-icon' />
                            <Image src={iconBank} alt='payment-method-icon' />
                            <Image src={iconMomo} alt='payment-method-icon' />
                            <Image src={iconAmex} alt='payment-method-icon' />
                            <Image src={iconMasterCard} alt='payment-method-icon' />
                            <Image src={iconVisa} alt='payment-method-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
