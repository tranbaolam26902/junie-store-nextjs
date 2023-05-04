'use client';

// Third-party libs
import { useEffect, useState } from 'react';

// Styles
import styles from '~/app/loading.module.scss';

// Asset files
import iconArrowLeft from '@/assets/icons/arrow-left.svg';
import iconArrowRight from '@/assets/icons/arrow-right.svg';

// App's components
import Button from '~/app/components/Button';
import SectionHeader from '~/app/(client)/components/SectionHeader';
import ProductItem from '../collections/[collectionSlug]/components/ProductItem';

export default function ProductsCarousel({
    products,
    title,
    subtitle,
    small = false,
    xlItemsPerSlide,
    lgItemsPerSlide,
    mdItemsPerSlide,
    xsItemsPerSlide,
}) {
    // Component's states
    const [hasMounted, setHasMounted] = useState(false);
    const [offsetLeft, setOffsetLeft] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(xlItemsPerSlide);
    const [totalSlide, setTotalSlide] = useState(products.length / itemsPerSlide);

    // Component's functions
    const calculateSlider = () => {
        if (window.innerWidth >= 1280) setItemsPerSlide(xlItemsPerSlide);
        else if (window.innerWidth >= 1024) setItemsPerSlide(lgItemsPerSlide);
        else if (window.innerWidth >= 768) setItemsPerSlide(mdItemsPerSlide);
        else setItemsPerSlide(xsItemsPerSlide);
    };

    // Component's event handlers
    const handleSlideLeft = () => {
        setOffsetLeft((current) => current + 100);
    };
    const handleSlideRight = () => {
        setOffsetLeft((current) => current - 100);
    };

    useEffect(() => {
        calculateSlider();
        window.onresize = calculateSlider;
        setHasMounted(true);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (itemsPerSlide) setTotalSlide(products.length / itemsPerSlide);
        // eslint-disable-next-line
    }, [itemsPerSlide]);

    return (
        <section className='relative group/random'>
            <SectionHeader title={title} subtitle={subtitle} small={small} />
            {hasMounted ? (
                <div className='overflow-x-auto lg:overflow-x-hidden no-scrollbar'>
                    <div
                        className={`
                    relative
                    flex
                    gap-6
                    mt-4
                    transition-all`}
                        style={{
                            left: offsetLeft + '%',
                            width: totalSlide * 100 + '%',
                        }}
                    >
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                    <div className={styles['loadingio-spinner-dual-ring-qo59o73r0tl']}>
                        <div className={styles['ldio-0m5i1demrio']}>
                            <div></div>
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {offsetLeft < 0 && (
                <Button
                    leftIcon={iconArrowLeft}
                    onClick={handleSlideLeft}
                    className='hidden lg:flex absolute top-1/2 -left-2 p-4 w-10 bg-white border border-secondary rounded-sm transition duration-300 scale-0 group-hover/random:scale-100'
                />
            )}
            {offsetLeft > -(totalSlide - 1) * 100 && (
                <Button
                    leftIcon={iconArrowRight}
                    onClick={handleSlideRight}
                    className='hidden lg:flex absolute top-1/2 -right-2 p-4 w-10 bg-white border border-secondary rounded-sm transition duration-300 scale-0 group-hover/random:scale-100'
                />
            )}
        </section>
    );
}
