// Third-party libs
import Image from 'next/image';

export default function ServiceItem({ service }) {
    return (
        <div className='flex flex-col gap-4 items-center text-center'>
            <Image src={service.icon} width={24} height={24} alt='service-icon' />
            <p className='text-xs font-bold tracking-wider uppercase'>{service.title}</p>
            <p>{service.description}</p>
        </div>
    );
}
