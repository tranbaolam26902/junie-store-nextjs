import blog1 from '@/assets/images/home/blog-01.webp';
import blog2 from '@/assets/images/home/blog-02.webp';
import blog3 from '@/assets/images/home/blog-03.webp';

import SectionHeader from './SectionHeader';
import BlogItem from './BlogItem';

const posts = [
    {
        path: '/',
        tag: 'Hướng dẫn',
        title: 'Cách làm sáng hạt đá đơn giản không phải ra hàng',
        image: blog1,
    },
    {
        path: '/',
        tag: 'Hướng dẫn',
        title: 'Những Điều Cần Lưu Ý Khi Đeo Trang Sức Bản To',
        image: blog2,
    },
    {
        path: '/',
        tag: 'Hướng dẫn',
        title: 'Tất Tần Tật Cách Đeo Nhẫn Cưới Các Cặp Đôi Cần Biết',
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
