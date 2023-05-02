'use client';

// Third-party libs
import React from 'react';

const Input = React.forwardRef((props, ref) => {
    // Component's props
    const { id, label, type, optional, message, className, ...passProps } = props;

    return (
        <div className='flex flex-col'>
            <div>
                {label && (
                    <label htmlFor={id} className='cursor-pointer select-none'>
                        {label}
                    </label>
                )}
                {label && optional && <span className='ml-2 italic text-secondary/70'>(không bắt buộc)</span>}
            </div>
            <div>
                <input
                    ref={ref}
                    id={id}
                    type={type ? type : 'text'}
                    className={`px-4 pt-3 pb-2.5 text-lg outline outline-1 outline-gray focus:outline-2 focus:outline-black rounded
                        ${message ? 'outline-red' : ''} w-full ${className ? className : ''}`
                        .replace(/\s+/g, ' ')
                        .trim()}
                    {...passProps}
                />
            </div>
            {message && <span className='mt-2 text-sm text-red'>{message}</span>}
        </div>
    );
});

export default Input;
