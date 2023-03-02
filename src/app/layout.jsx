import localFont from 'next/font/local';

import './globals.scss';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

/**
 * Font config
 */
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

/**
 * Config title template
 */
export const metadata = {
    title: {
        default: 'Junie',
        template: 'Junie | %s',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${myriad.variable} font-sans`}>
            <body className='mx-auto px-6 md:px-10 max-w-screen-2xl text-secondary bg-primary'>
                <Header />
                <main className='mt-[var(--header-height)]'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
