'use client';

// Third-party libs
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Assets files
import iconPlus from '@/assets/icons/plus.svg';
import iconClose from '@/assets/icons/close.svg';

// App's services
import { getCollections, createProduct } from '~/services';

// App's components
import Input from '~/app/components/Input';
import Button from '~/app/components/Button';

export default function CreateProduct() {
    // Hooks
    const router = useRouter();

    // Component's states
    const [errorMessages, setErrorMessages] = useState([]);
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [slug, setSlug] = useState('');
    const [slugMessage, setSlugMessage] = useState('');
    const [price, setPrice] = useState('');
    const [priceMessage, setPriceMessage] = useState('');
    const [discount, setDiscount] = useState('');
    const [discountMessage, setDiscountMessage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [quantityMessage, setQuantityMessage] = useState('');
    const [type, setType] = useState('');
    const [typeMessage, setTypeMessage] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionMessage, setDescriptionMessage] = useState('');
    const [userManual, setUserManual] = useState('');
    const [userManualMessage, setUserManualMessage] = useState('');
    const [collections, setCollections] = useState([]);
    const [collectionMessage, setCollectionMessage] = useState('');
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [imageMessage, setImageMessage] = useState('');

    // Component's refs
    const collectionRef = useRef();
    const inputFileRef = useRef();

    // Component's functions
    const validateProductData = () => {
        if (name.trim() === '') setNameMessage('This field is required!');
        if (slug.trim() === '') setSlugMessage('This field is required!');
        if (collectionRef.current.value === '') setCollectionMessage('This field is required!');
        if (price.trim() === '') setPriceMessage('This field is required!');
        if (Number.parseFloat(price) === 0) setPriceMessage('Please enter a valid price!');
        if (Number.parseInt(discount) < 0 || Number.parseInt(discount) > 100)
            setDiscountMessage('Please enter a valid discount percent!');
        if (quantity.trim() === '') setQuantityMessage('This field is required!');
        if (Number.parseInt(quantity) <= 0) setQuantityMessage('Please enter a valid quantity!');
        if (type.trim() === '') setTypeMessage('This field is required!');
        if (description.trim() === '') setDescriptionMessage('This field is required!');
        if (userManual.trim() === '') setUserManualMessage('This field is required!');
        if (images.length === 0 || files.length === 0) setImageMessage('Please select image(s) for this product!');

        if (
            name.trim() === '' ||
            slug.trim() === '' ||
            collectionRef.current.value === '' ||
            price.trim() === '' ||
            Number.parseFloat(price) === 0 ||
            Number.parseInt(discount) < 0 ||
            Number.parseInt(discount) > 100 ||
            Number.parseInt(quantity) < 0 ||
            type.trim() === '' ||
            description.trim() === '' ||
            userManual.trim() === '' ||
            images.length === 0 ||
            files.length === 0
        )
            return false;
        return true;
    };

    // Component's event handlers
    const handleCancelAdd = () => {
        router.back();
    };
    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!validateProductData()) return;

        const formData = new FormData();
        const model = {
            name: name.trim(),
            slug: slug.trim(),
            price: Number.parseFloat(price),
            discount: Number.parseFloat(discount) / 100 || 0,
            quantity: Number.parseInt(quantity),
            type: type.trim(),
            description: description.trim(),
            userManual: userManual.trim(),
            collectionId: collectionRef.current.value,
        };
        formData.append('model', JSON.stringify(model));
        files.forEach((file, index) => {
            formData.append(index, file);
        });

        const data = await createProduct(formData);
        if (data.isSuccess) {
            router.push('/admin/products');
        } else setErrorMessages(data.errors);
    };
    const handleUploadFile = (e) => {
        setImages([
            ...images,
            ...Array.from(e.target.files).map((file) => ({ imageUrl: URL.createObjectURL(file), name: file.name })),
        ]);
        setFiles([...files, ...Array.from(e.target.files)]);
        setImageMessage('');
    };

    // useEffects
    useEffect(() => {
        getSelectData();

        async function getSelectData() {
            const data = await getCollections();
            setCollections(data);
        }
    }, []);

    return (
        <div className='flex flex-col gap-6 mx-auto px-6 md:px-10 py-6 max-w-screen-2xl'>
            <p className='text-3xl font-bold uppercase'>Add new product</p>
            {errorMessages.length > 0 && (
                <div className='flex flex-col-gap-2'>
                    {errorMessages.map((errorMessage, index) => (
                        <span key={index} className='text-sm text-red'>
                            {errorMessage}
                        </span>
                    ))}
                </div>
            )}
            <form onSubmit={handleAddProduct} className='grid lg:grid-cols-2 gap-10'>
                <div className='flex flex-col gap-6'>
                    <Input
                        id='name'
                        name='name'
                        label='Name'
                        value={name}
                        message={nameMessage}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameMessage('');
                        }}
                    />
                    <Input
                        id='slug'
                        name='slug'
                        label='Slug'
                        value={slug}
                        message={slugMessage}
                        onChange={(e) => {
                            setSlug(e.target.value);
                            setSlugMessage('');
                        }}
                    />
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='collection'>Collection</label>
                        <select
                            ref={collectionRef}
                            id='collection'
                            defaultValue=''
                            className={`px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black appearance-none ${
                                collectionMessage ? 'outline-red' : ''
                            }`}
                        >
                            <option value=''>-- Select collection --</option>
                            {collections.map((collection, index) => (
                                <option key={index} value={collection.id}>
                                    {collection.title}
                                </option>
                            ))}
                        </select>
                        {collectionMessage && <span className='mt-1 text-sm text-red'>{collectionMessage}</span>}
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex-1'>
                            <Input
                                id='type'
                                name='type'
                                label='Type'
                                value={type}
                                message={typeMessage}
                                onChange={(e) => {
                                    setType(e.target.value);
                                    setTypeMessage('');
                                }}
                            />
                        </div>
                        <div className='flex-1'>
                            <Input
                                id='price'
                                name='price'
                                type='number'
                                label='Price'
                                value={price}
                                message={priceMessage}
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                    setPriceMessage('');
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex-1'>
                            <Input
                                id='quantity'
                                name='quantity'
                                type='number'
                                label='Quantity'
                                value={quantity}
                                message={quantityMessage}
                                onChange={(e) => {
                                    setQuantity(e.target.value);
                                    setQuantityMessage('');
                                }}
                            />
                        </div>
                        <div className='flex-1'>
                            <Input
                                id='discount'
                                name='discount'
                                type='number'
                                label='Discount (%)'
                                value={discount}
                                message={discountMessage}
                                onChange={(e) => {
                                    setDiscount(e.target.value);
                                    setDiscountMessage('');
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='description' className='cursor-pointer select-none w-fit'>
                            Description
                        </label>
                        <textarea
                            id='description'
                            name='description'
                            value={description}
                            rows={4}
                            className={`px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black appearance-none resize-none ${
                                descriptionMessage ? 'outline-red' : ''
                            }`}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                setDescriptionMessage('');
                            }}
                        />
                        {descriptionMessage && <span className='mt-1 text-sm text-red'>{descriptionMessage}</span>}
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='userManual' className='cursor-pointer select-none w-fit'>
                            User manual
                        </label>
                        <textarea
                            id='userManual'
                            name='userManual'
                            value={userManual}
                            rows={4}
                            className={`px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black appearance-none resize-none ${
                                userManualMessage ? 'outline-red' : ''
                            }`}
                            onChange={(e) => {
                                setUserManual(e.target.value);
                                setUserManualMessage('');
                            }}
                        />
                        {userManualMessage && <span className='mt-1 text-sm text-red'>{userManualMessage}</span>}
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-4 p-8 h-fit rounded shadow ${
                        imageMessage ? 'outline outline-1 outline-red' : ''
                    }`}
                >
                    <div className='flex items-center justify-between'>
                        <span>Product images</span>
                        <Button
                            text
                            leftIcon={iconPlus}
                            iconSize={10}
                            className='transition duration-200 hover:opacity-80'
                            onClick={() => {
                                inputFileRef.current.click();
                            }}
                        >
                            <span className='ml-2'>Upload files</span>
                        </Button>
                        <input
                            ref={inputFileRef}
                            type='file'
                            accept='image/*'
                            multiple
                            hidden
                            onChange={handleUploadFile}
                        />
                    </div>
                    {imageMessage && <span className='text-red'>{imageMessage}</span>}
                    {images.length > 0 && (
                        <>
                            <div className='flex flex-col gap-2'>
                                {images.map((image, index) => (
                                    <div key={index} className='flex gap-4 items-center p-4 rounded shadow'>
                                        <Image
                                            src={image.imageUrl}
                                            width={48}
                                            height={64}
                                            alt='image'
                                            className='w-12 h-16'
                                        />
                                        <span className='flex-1'>{image.name}</span>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                setImages(images.filter((image, idx) => idx !== index));
                                                setFiles(files.filter((file, idx) => idx !== index));
                                            }}
                                        >
                                            <Image src={iconClose} alt='icon-remove-image' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                <div className='flex gap-6'>
                    <Button text className='transition duration-200 hover:opacity-80' onClick={handleCancelAdd}>
                        Cancel
                    </Button>
                    <Button type='submit' accent>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
}
