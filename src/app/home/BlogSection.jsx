import blog1 from '@/assets/images/home/blog-01.webp';
import blog2 from '@/assets/images/home/blog-02.webp';
import blog3 from '@/assets/images/home/blog-03.webp';

import SectionHeader from './SectionHeader';
import BlogItem from './BlogItem';

const posts = [
    {
        path: '/',
        tag: 'Kiến thức',
        title: 'Cách Vệ Sinh Ngọc Trai Lung Linh Như Mới Ngay Tại Nhà',
        image: blog1,
    },
    {
        path: '/',
        tag: 'Kiến thức',
        title: 'Bạc Gồm Mấy Loại? Loại Bạc Nào Tốt Nhất Hiện Nay?',
        image: blog2,
    },
    {
        path: '/',
        tag: 'Hướng dẫn',
        title: 'Hướng Dẫn Nàng Cách Tháo Khuyên Tai Bấm Nhanh Nhất',
        image: blog3,
    },
];

export default function BlogSection() {
    return (
        <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <SectionHeader subtitle='Bắt kịp xu hướng' title="Junie's Blog" />
            <div className='overflow-x-auto no-scrollbar mt-12'>
                <div className='flex justify-center gap-4 md:gap-10 w-[240vw] md:w-[180vw] lg:w-full mx-auto'>
                    {posts.map((post) => (
                        <BlogItem post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
