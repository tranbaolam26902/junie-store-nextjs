// App's components
import SectionHeader from '~/app/(client)/components/SectionHeader';
import CategoryItem from './CategoryItem';

const categories = [
    {
        id: 1,
        slug: '/collections/earrings',
        image: '/assets/images/home/earrings.webp',
        name: 'Bông tai',
    },
    {
        id: 2,
        slug: '/collections/necklace',
        image: '/assets/images/home/necklace.webp',
        name: 'Dây chuyền',
    },
    {
        id: 3,
        slug: '/collections/bracelet',
        image: '/assets/images/home/bracelet.webp',
        name: 'Vòng tay',
    },
    {
        id: 4,
        slug: '/collections/hair-clip',
        image: '/assets/images/home/hair-clip.webp',
        name: 'Phụ kiện tóc',
    },
];

export default async function CategorySection() {
    return (
        <section className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <SectionHeader subtitle='Tham khảo' title='Danh mục' />
            <p className='mb-12 text-center'>Từ đôi bàn tay của nghệ nhân mang tới cho nàng sự lựa chọn đa dạng.</p>
            <div className='overflow-x-auto no-scrollbar'>
                <div className='flex justify-center gap-4 md:gap-10 w-[160vw] md:w-[110vw] lg:w-full xl:w-10/12 mx-auto'>
                    {categories.map((category) => (
                        <CategoryItem key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}
