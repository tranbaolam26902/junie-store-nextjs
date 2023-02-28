import localFont from 'next/font/local';

import './globals.scss';

const myriad = localFont({
    src: [
        {
            path: '../../public/fonts/MyriadPro-Light.otf',
            weight: '100 300',
        },
        {
            path: '../../public/fonts/MyriadPro-LightItalic.otf',
            weight: '100 300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/MyriadPro-Normal.otf',
            weight: '400',
        },
        {
            path: '../../public/fonts/MyriadPro-NormalItalic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/MyriadPro-SemiBold.otf',
            weight: '500 600',
        },
        {
            path: '../../public/fonts/MyriadPro-SemiBoldItalic.otf',
            weight: '500 600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/MyriadPro-Bold.otf',
            weight: '700 900',
        },
        {
            path: '../../public/fonts/MyriadPro-BoldItalic.otf',
            weight: '700 900',
            style: 'italic',
        },
    ],
    variable: '--font-myriad-pro',
});

export const metadata = {
    title: {
        default: 'Junie',
        template: 'Junie | %s',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${myriad.variable} font-sans`}>
            <body className='text-secondary bg-primary'>{children}</body>
        </html>
    );
}
