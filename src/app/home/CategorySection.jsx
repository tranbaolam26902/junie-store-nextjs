import getData from '../utils/getData';

import CategoryItem from './CategoryItem';
import SectionHeader from './SectionHeader';

export default async function CategorySection() {
    const categories = await getData('https://junie-store-fake-api.vercel.app/categories');

    return (
        <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <SectionHeader subtitle='Tham khảo' title='Danh mục' />
            <p className='mb-12 text-center'>Từ đôi bàn tay của nghệ nhân mang tới cho nàng sự lựa chọn đa dạng.</p>
            <div className='overflow-x-auto no-scrollbar'>
                <div className='flex justify-center gap-4 md:gap-10 w-[160vw] md:w-[110vw] lg:w-full xl:w-10/12 mx-auto'>
                    {categories.map((category) => (
                        <CategoryItem
                            key={category.id}
                            slug={category.slug}
                            image={category.image}
                            name={category.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
