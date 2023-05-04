// App's components
import FooterAside from './components/FooterAside';
import FooterMain from './components/FooterMain';

export default function Footer() {
    return (
        <footer className='bg-gray'>
            <div className='mx-auto px-6 md:px-10 py-16 max-w-screen-2xl'>
                <FooterMain />
                <FooterAside />
            </div>
        </footer>
    );
}
