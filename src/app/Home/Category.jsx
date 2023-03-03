import earrings from '@/assets/images/Home/earrings.webp';
import necklace from '@/assets/images/Home/necklace.webp';
import bracelet from '@/assets/images/Home/bracelet.webp';
import hairClip from '@/assets/images/Home/hair-clip.webp';

import CategoryItem from './CategoryItem';
import SectionHeader from './SectionHeader';

export default function Category() {
    return (
        <>
            <SectionHeader subtitle='Tham khảo' title='Danh mục' />
            <p className='mb-12 text-center'>Từ đôi bàn tay của nghệ nhân mang tới cho nàng sự lựa chọn đa dạng.</p>
            <div className='overflow-x-auto no-scrollbar'>
                <div className='flex justify-center gap-4 md:gap-10 w-[160vw] md:w-[110vw] lg:w-full xl:w-10/12 mx-auto'>
                    <CategoryItem image={earrings} title='Bông tai' />
                    <CategoryItem image={necklace} title='Dây chuyền' />
                    <CategoryItem image={bracelet} title='Vòng tay' />
                    <CategoryItem image={hairClip} title='Phụ kiện tóc' />
                </div>
            </div>
        </>
    );
}
