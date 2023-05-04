'use client';

// Third-party libs
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Assets files
import iconPlus from '@/assets/icons/plus.svg';
import iconClose from '@/assets/icons/close.svg';

// App's services
import { getCollections, getProduct, updateProduct } from '~/services';

// App's components
import Input from '~/app/components/Input';
import Button from '~/app/components/Button';

export default function EditProduct({ params }) {
    // Hooks
    const router = useRouter();

    // Component's states
    const [errorMessages, setErrorMessages] = useState([]);
    const [name, setName] = useState('');
    const [nameMessage, setNameMessage] = useState('');
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
    const [collection, setCollection] = useState(0);
    const [collections, setCollections] = useState([]);
    const [collectionMessage, setCollectionMessage] = useState('');
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [imageMessage, setImageMessage] = useState('');

    // Component's refs
    const inputFileRef = useRef();

    // Component's functions
    const validateProductData = () => {
        if (name.trim() === '') setNameMessage('This field is required!');
        if (collection === 0) setCollectionMessage('This field is required!');
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
            collection === 0 ||
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
    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!validateProductData()) return;

        const formData = new FormData();
        const model = {
            name: name.trim(),
            slug: params.productSlug,
            price: Number.parseFloat(price),
            discount: Number.parseFloat(discount) / 100 || 0,
            quantity: Number.parseInt(quantity),
            type: type.trim(),
            description: description.trim(),
            userManual: userManual.trim(),
            collectionId: collection,
        };
        formData.append('model', JSON.stringify(model));
        files.forEach((file, index) => {
            formData.append(index, file);
        });

        const data = await updateProduct(formData);
        if (data.isSuccess) {
            router.push('/admin/products');
        } else setErrorMessages(data.errors);
    };
    const handleUploadFile = (e) => {
        const currentImages = [
            ...images,
            ...Array.from(e.target.files).map((file) => ({ imageUrl: URL.createObjectURL(file), name: file.name })),
        ];
        const currentFiles = [...files, ...Array.from(e.target.files)];
        setImages(currentImages);
        setFiles(currentFiles);
        setImageMessage('');
    };

    // useEffects
    useEffect(() => {
        getSelectData();

        function getSelectData() {
            getCollections().then((data) => {
                setCollections(data);
            });
        }
    }, []);
    useEffect(() => {
        getProductData();

        function getProductData() {
            getProduct(params.productSlug).then((data) => {
                setName(data.name);
                setDiscount(data.discount.toString());
                setPrice(data.price.toString());
                setQuantity(data.quantity.toString());
                setType(data.type);
                setDescription(data.description);
                setUserManual(data.userManual);
                setCollection(data.collectionId);
                getProductImages(data);
            });
        }
        function getProductImages(product) {
            const currentFiles = [];
            const currentImages = [];
            product.images.forEach((image, index) => {
                const fileName = image.path.substring(image.path.lastIndexOf('/') + 1, image.path.lastIndexOf('.'));
                const fileExt = image.path.substring(image.path.lastIndexOf('.'));
                fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${image.path}`, {
                    mode: 'no-cors',
                })
                    .then((response) => response.blob())
                    .then((blob) => {
                        const file = new File([blob], fileName + fileExt, { type: blob.type });
                        currentFiles.push(file);
                        currentImages.push({
                            imageUrl: `${process.env.NEXT_PUBLIC_API_ENDPOINT_URL}/${image.path}`,
                            name: file.name,
                        });
                        setFiles(currentFiles);
                        setImages(currentImages);
                    });
            });
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
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='collection'>Collection</label>
                        <select
                            id='collection'
                            value={collection}
                            onChange={(e) => {
                                setCollection(e.target.value);
                            }}
                            className={`px-4 py-3 rounded outline outline-1 outline-gray focus:outline-2 focus:outline-black appearance-none ${
                                collectionMessage ? 'outline-red' : ''
                            }`}
                        >
                            <option value={0}>-- Select collection --</option>
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
                                        <span className='flex-1 truncate text-ellipsis'>{image.name}</span>
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
                    <Button text className='transition duration-200 hover:opacity-80'>
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
