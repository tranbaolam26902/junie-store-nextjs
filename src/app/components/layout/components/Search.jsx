import Image from 'next/image';
import Button from '../../Button';

export default function Search() {
    return (
        <>
            {/* Start: Search's overlay */}
            <div
                className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black/[.3] transition-all ${
                    isClosing ? 'animate-fade-out' : 'animate-fade-in'
                }`}
                onClick={handleCloseSearch}
            ></div>
            {/* End: Search's overlay */}
            {/* Start: Search */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 overflow-y-auto no-scrollbar overscroll-contain flex flex-col w-[90vw] max-w-[500px] h-screen bg-white ${
                    isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'
                } `}
            >
                {/* Start: Search header */}
                <div className='flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray'>
                    <div className='flex flex-1 items-center gap-2'>
                        <span>
                            <Image src={iconSearch} alt='icon-search' />
                        </span>
                        <input
                            type='text'
                            autoFocus
                            placeholder='Bạn đang muốn tìm kiếm gì?'
                            className='flex-1 border-none outline-none'
                        />
                    </div>
                    <Button leftIcon={iconClose} iconSize={16} className='mr-[-8px]' onClick={handleCloseSearch} />
                </div>
                {/* End: Search header */}
            </div>
        </>
    );
}
