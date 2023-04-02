'use client';

// Third-party libs
import { useEffect, useRef, useState } from 'react';

export default function ProductDescription({ data }) {
    // Component's states
    const [offsetLeft, setOffsetLeft] = useState(0);
    const [offsetWidth, setOffsetWidth] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    // Hooks
    const firstTabRef = useRef();

    useEffect(() => {
        setOffsetWidth(firstTabRef.current.offsetWidth);
    }, []);

    return (
        <div className='lg:col-start-2 lg:col-span-4 my-16'>
            <div className='relative flex gap-x-10 border-b-2 border-gray'>
                <button
                    ref={firstTabRef}
                    className={`inline-block py-2 px-4 text-sm font-semibold uppercase tracking-wider ${
                        !isActive ? 'opacity-50' : ''
                    } transition duration-500`}
                    onClick={(e) => {
                        if (!isActive) {
                            setOffsetLeft(e.target.closest('button').offsetLeft);
                            setOffsetWidth(e.target.closest('button').offsetWidth);
                            setIsClosing(true);
                            setTimeout(() => {
                                setIsClosing(false);
                                setIsActive(true);
                            }, 100);
                        }
                    }}
                >
                    Mô tả
                </button>
                <button
                    className={`inline-block py-2 px-4 text-sm font-semibold uppercase tracking-wider ${
                        isActive ? 'opacity-50' : ''
                    } transition duration-500`}
                    onClick={(e) => {
                        if (isActive) {
                            setOffsetLeft(e.target.closest('button').offsetLeft);
                            setOffsetWidth(e.target.closest('button').offsetWidth);
                            setIsClosing(true);
                            setTimeout(() => {
                                setIsClosing(false);
                                setIsActive(false);
                            }, 100);
                        }
                    }}
                >
                    Sử dụng & bảo quản
                </button>
                <div
                    className='absolute -bottom-0.5 h-0.5 bg-secondary transition-all duration-500'
                    style={{ left: offsetLeft + 'px', width: offsetWidth + 'px' }}
                ></div>
            </div>
            <div>
                {isActive ? (
                    <div
                        className={`${
                            isClosing
                                ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                        } flex flex-col gap-4 pt-10`}
                    >
                        {data.description.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                ) : (
                    <div
                        className={`${
                            isClosing
                                ? 'animate-[fade-out_100ms_ease-in-out_both]'
                                : 'animate-[fade-in_400ms_ease-in-out_300ms_both]'
                        } flex flex-col gap-4 pt-10`}
                    >
                        {data.using.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
