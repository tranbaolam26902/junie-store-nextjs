// App's features
import getFeaturedPosts from '../utils/home/getFeaturedPosts';

// App's components
import SectionHeader from './SectionHeader';
import BlogItem from './BlogItem';

export default async function BlogSection() {
    const posts = await getFeaturedPosts();

    return (
        <div className='mx-auto px-6 md:px-10 max-w-screen-2xl'>
            <SectionHeader subtitle='Bắt kịp xu hướng' title="Junie's Blog" />
            <div className='overflow-x-auto no-scrollbar mt-12'>
                <div className='flex justify-center gap-4 md:gap-10 w-[240vw] md:w-[180vw] lg:w-full mx-auto'>
                    {posts.map((post) => (
                        <BlogItem key={post.id} data={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
