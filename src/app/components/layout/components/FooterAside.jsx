// Third-party libs
import Image from 'next/image';

// Asset files
import iconCod from '@/assets/icons/cod.svg';
import iconBank from '@/assets/icons/bank.svg';
import iconMomo from '@/assets/icons/momo.svg';
import iconAmex from '@/assets/icons/amex.svg';
import iconMasterCard from '@/assets/icons/mastercard.svg';
import iconVisa from '@/assets/icons/visa.svg';

// App's components
import Button from '../../Button';

export default function FooterAside() {
    return (
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
                    Hộ kinh doanh Junie | 742 Lê Thanh Nghị, TP. Hải Dương, Hải Dương | ĐK số 04A8018757 cấp ngày
                    07/10/2021 tại Hải Dương | MST: 8411247921
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
    );
}
