import icons from '@/assets/icons';

import Button from '../../Button';

export default function UserActions() {
    return (
        <div className='flex flex-1 justify-end gap-x-2 mr-[-8px]'>
            <Button leftIcon={icons.search} />
            <Button leftIcon={icons.cart} className='relative'>
                <div className='absolute top-0.5 right-[-6px] pt-px w-5 h-5 text-[12px] text-white bg-black rounded-full'>
                    4
                </div>
            </Button>
        </div>
    );
}
