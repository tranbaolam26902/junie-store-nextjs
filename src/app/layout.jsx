// Third-party libs
import localFont from 'next/font/local';

// App's features
import StoreProvider from '~/redux/StoreProvider';

// Styles
import './globals.scss';

// App's components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

// Local font config
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

// Config metadata
export const metadata = {
    title: {
        default: 'Junie | Thương Hiệu Phụ Kiện Thời Trang Bông Tai, Dây Chuyền Nữ',
        template: 'Junie | %s',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${myriad.variable} font-sans text-secondary bg-primary`}>
                <StoreProvider>
                    <Header />
                    <main className='mt-[var(--header-height)]'>{children}</main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
