"use client";

import {
    useCallback,
    useState,
} from "react";

import {
    useForm,
    useFieldArray,
} from "react-hook-form";

import {
    zodResolver,
} from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import {
    createProductSchema,
} from "@/src/validation/product";

import {
    ProductType,
} from "@/src/services/cart.service";

import {
    createEbike,
    updateEbike,
} from "@/src/services/ebike.service";

import {
    createAccessory,
    updateAccessory,
} from "@/src/services/accessory.service";

import {
    createEnhancement,
    updateEnhancement,
} from "@/src/services/enhancement.service";

import {
    apiError,
} from "@/src/services/api.service";

import {
    Product,
} from "@/src/types/product";
import { getProductTypeFromCategory } from "../lib/getProductTypeFromCategory";


// ===============================
// TYPES
// ===============================

export type InventoryStatus =
    | "in-stock"
    | "low-stock"
    | "out-of-stock";


export interface ProductColor {
    name: string;
    color: string;
}


export interface ProductFormValues {
    name: string;

    description: string;

    shortDescription: string;

    price: number;

    discountPrice?: number;

    shippingDuration?: string;

    category: string;

    stock: number;

    badge?: string;
    inventoryStatus: InventoryStatus;

    isFeatured?: boolean;

    isNewArrival?: boolean;

    colors?: ProductColor[];
}


export interface ExistingImage {

    public_id: string;

    secure_url: string;

}


// ===============================
// CONSTANTS
// ===============================

const MAX_IMAGES = 4;

const MAX_IMAGE_SIZE =
    5 * 1024 * 1024;

const DEFAULT_VALUES: ProductFormValues = {

    name: "",

    description: "",

    shortDescription: "",

    price: 0,

    discountPrice: undefined,

    stock: 0,

    inventoryStatus:
        "in-stock" as InventoryStatus,

    category: "",

    colors: [] as ProductColor[],

};



// ===============================
// HELPERS
// ===============================

function createEmptyImages<T>() {

    return Array(MAX_IMAGES)
        .fill(null) as (
            T | null
        )[];

}

function safeImageSlots(
    images: ExistingImage[]
) {

    const slots =
        createEmptyImages<ExistingImage>();

    images
        .slice(0, MAX_IMAGES)
        .forEach(
            (
                image,
                index
            ) => {

                slots[index] = image;

            }
        );

    return slots;
}



// ===============================
// HOOK
// ===============================

export function useCreateProductForm() {


    const {
        register,

        control,

        watch,

        setValue,

        reset,

        handleSubmit,

        formState: {
            errors,
        },

    } = useForm<ProductFormValues>({

        resolver:
            zodResolver(
                createProductSchema
            ),

        defaultValues:
            DEFAULT_VALUES,

        mode:
            "onChange",

    });



    // ===============================
    // PRODUCT TYPE
    // ===============================


    const [
        productType,
        setProductType,
    ] = useState<ProductType>(
        "ebikes"
    );



    const [
        editingId,
        setEditingId,
    ] = useState<
        string | null
    >(null);



    const isEditing =
        Boolean(editingId);



    // ===============================
    // IMAGE STATES
    // ===============================


    const [
        imageFiles,
        setImageFiles,
    ] = useState<
        (File | null)[]
    >(
        createEmptyImages<File>()
    );



    const [
        imagePreview,
        setImagePreview,
    ] = useState<
        (string | null)[]
    >(
        createEmptyImages<string>()
    );



    /**
     * Existing cloud images.
     *
     * IMPORTANT:
     * null represents an empty slot.
     */
    const [
        existingImages,
        setExistingImages,
    ] = useState<
        (ExistingImage | null)[]
    >(
        createEmptyImages<ExistingImage>()
    );

    const [
        removedImages,
        setRemovedImages,
    ] = useState<string[]>([]);


    const [
        selectedImage,
        setSelectedImage,
    ] = useState(0);



    const [
        imageError,
        setImageError,
    ] = useState("");




    // ===============================
    // UI STATES
    // ===============================


    const [
        isUnlimited,
        setIsUnlimited,
    ] = useState(true);



    const [
        taxIncluded,
        setTaxIncluded,
    ] = useState<
        "yes" | "no"
    >(
        "yes"
    );



    const [
        isPublishing,
        setIsPublishing,
    ] = useState(false);



    // ===============================
    // FIELD ARRAYS
    // ===============================


    const colors =
        useFieldArray({

            control,

            name:
                "colors",

        });



    // ===============================
    // COMMON RESET
    // ===============================


    const resetProductState =
        useCallback(
            () => {

                reset(
                    DEFAULT_VALUES
                );


                setEditingId(null);


                setRemovedImages([]);

                setImageFiles(
                    createEmptyImages<File>()
                );


                setImagePreview(
                    createEmptyImages<string>()
                );


                setExistingImages(
                    createEmptyImages<ExistingImage>()
                );


                setSelectedImage(0);


                setProductType(
                    "ebikes"
                );


                setIsUnlimited(true);


                setTaxIncluded(
                    "yes"
                );


                setImageError("");

            },
            [
                reset,
            ]
        );

    // ===============================
    // IMAGE MANAGEMENT
    // ===============================


    const revokePreview =
        useCallback(
            (
                url?: string | null
            ) => {

                if (
                    url &&
                    url.startsWith("blob:")
                ) {

                    URL.revokeObjectURL(url);

                }

            },
            []
        );



    const addImage =
        useCallback(
            (
                file: File,
                index: number
            ) => {


                setImageError("");



                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    toast.error(
                        "Only image files are allowed"
                    );

                    return;

                }



                if (
                    file.size >
                    MAX_IMAGE_SIZE
                ) {

                    const message =
                        "Image size cannot exceed 5MB";


                    setImageError(
                        message
                    );


                    toast.error(
                        message
                    );


                    return;

                }



                const preview =
                    URL.createObjectURL(
                        file
                    );



                setImageFiles(
                    previous => {

                        const updated =
                            [
                                ...previous
                            ];


                        updated[index] =
                            file;


                        return updated;

                    }
                );



                setImagePreview(
                    previous => {

                        const updated =
                            [
                                ...previous
                            ];


                        revokePreview(
                            updated[index]
                        );


                        updated[index] =
                            preview;


                        return updated;

                    }
                );



                setExistingImages(previous => {

                    const updated = [...previous];

                    const removedImage = updated[index];

                    if (removedImage?.public_id) {

                        setRemovedImages(prev => [
                            ...prev,
                            removedImage.public_id
                        ]);

                    }

                    updated[index] = null;

                    return updated;

                });


            },
            [
                revokePreview
            ]
        );





    const removeImage =
        useCallback(
            (
                index: number
            ) => {


                setImageFiles(
                    previous => {

                        const updated =
                            [
                                ...previous
                            ];


                        updated[index] =
                            null;


                        return updated;

                    }
                );



                setImagePreview(
                    previous => {

                        const updated =
                            [
                                ...previous
                            ];


                        revokePreview(
                            updated[index]
                        );


                        updated[index] =
                            null;


                        return updated;

                    }
                );



                setExistingImages(previous => {
                    const updated =
                        [...previous];
                    const removed =
                        updated[index];
                    if (
                        removed?.public_id
                    ) {
                        setRemovedImages(prev => [
                            ...prev,
                            removed.public_id
                        ]);
                    }
                    updated[index] = null;
                    return updated;
                });
            },
            [
                revokePreview
            ]
        );




    // ===============================
    // FORMDATA BUILDER
    // ===============================


    const buildFormData = (
        values: ProductFormValues
    ) => {


        const form =
            new FormData();


        Object.entries(values)
            .forEach(([key, value]) => {


                if (value === undefined)
                    return;


                if (
                    typeof value === "object"
                ) {

                    form.append(
                        key,
                        JSON.stringify(value)
                    )

                }

                else {

                    form.append(
                        key,
                        String(value)
                    )

                }


            });


        form.append(
            "removedImages",
            JSON.stringify(removedImages)
        );

        form.append(
            "existingImages",
            JSON.stringify(existingImages.filter(Boolean))
        );



        imageFiles
            .filter(
                (file): file is File => Boolean(file)
            )
            .forEach(file => {

                form.append(
                    "images",
                    file!
                )

            });



        return form;

    }




    // ===============================
    // SUBMIT HANDLER
    // ===============================


    const submit =
        handleSubmit(
            async (
                values
            ) => {



                const hasExistingImages =
                    existingImages.some(
                        Boolean
                    );



                const hasNewImages =
                    imageFiles.some(
                        Boolean
                    );



                if (
                    !hasExistingImages &&
                    !hasNewImages
                ) {

                    toast.error(
                        "At least one product image is required"
                    );

                    return;

                }




                try {


                    setIsPublishing(
                        true
                    );



                    const formData =
                        buildFormData(
                            values
                        );



                    let response;



                    switch (
                    productType
                    ) {


                        case "ebikes":


                            response =
                                isEditing

                                    ?

                                    await updateEbike(
                                        editingId!,
                                        formData
                                    )

                                    :

                                    await createEbike(
                                        formData
                                    );


                            break;




                        case "accessories":


                            response =
                                isEditing

                                    ?

                                    await updateAccessory(
                                        editingId!,
                                        formData
                                    )

                                    :

                                    await createAccessory(
                                        formData
                                    );


                            break;




                        case "enhancements":


                            response =
                                isEditing

                                    ?

                                    await updateEnhancement(
                                        editingId!,
                                        formData
                                    )

                                    :

                                    await createEnhancement(
                                        formData
                                    );


                            break;



                        default:


                            throw new Error(
                                "Invalid product type"
                            );

                    }




                    toast.success(
                        response?.message ??
                        "Product saved successfully"
                    );



                    if (!isEditing) {
                        resetProductState();
                    }



                }
                catch (error) {


                    console.error(
                        "Product submit error:",
                        error
                    );



                    toast.error(
                        apiError(error) ??
                        "Failed to save product"
                    );


                }
                finally {


                    setIsPublishing(
                        false
                    );


                }


            }
        );

    // ===============================
    // POPULATE EDIT FORM
    // ===============================


    const populateForm =
        useCallback(
            (
                product: Product
            ) => {


                /**
                 * Prevent invalid backend values
                 * from breaking the select input.
                 */
                const validInventoryStatuses:
                    InventoryStatus[] =
                    [
                        "in-stock",
                        "low-stock",
                        "out-of-stock",
                    ];



                const inventoryStatus =
                    validInventoryStatuses.includes(
                        product.inventoryStatus as InventoryStatus
                    )

                        ?

                        product.inventoryStatus as InventoryStatus

                        :

                        "in-stock";





                setProductType(
                    getProductTypeFromCategory(
                        product.category
                    )
                );

                reset({

                    name:
                        product.name ??
                        "",


                    description:
                        product.description ??
                        "",


                    shortDescription:
                        product.shortDescription ??
                        "",


                    price:
                        product.price ??
                        0,


                    discountPrice:
                        product.discountPrice ??
                        undefined,


                    stock:
                        product.stock ??
                        0,


                    inventoryStatus,


                    category:
                        product.category ??
                        "",


                    colors:
                        product.colors ??
                        [],

                });




                setEditingId(
                    product._id
                );




                /**
                 * Normalize cloud images
                 * into fixed slots.
                 */
                const formattedImages =
                    (product.images ?? [])
                        .map(
                            image => ({

                                public_id:
                                    image.public_id
                                    ??
                                    "",


                                secure_url:
                                    image.secure_url
                                    ??
                                    "",

                            })
                        )
                        .filter(
                            image =>
                                Boolean(
                                    image.secure_url
                                )
                        );



                setExistingImages(
                    safeImageSlots(
                        formattedImages
                    )
                );




                /**
                 * Hydrate preview slots
                 */
                const previews =
                    createEmptyImages<string>();


                formattedImages
                    .slice(
                        0,
                        MAX_IMAGES
                    )
                    .forEach(
                        (
                            image,
                            index
                        ) => {

                            previews[index] =
                                image.secure_url;

                        }
                    );



                /**
                 * Remove previous blob URLs
                 */
                setImagePreview(prev => {

                    prev.forEach(preview => {
                        if (preview?.startsWith("blob:")) {
                            URL.revokeObjectURL(preview);
                        }
                    });

                    return previews;
                });



                setImagePreview(
                    previews
                );



                /**
                 * Reset local uploads
                 */
                setImageFiles(
                    createEmptyImages<File>()
                );



                setSelectedImage(0);



            },
            [
                reset,
            ]
        );




    // ===============================
    // RETURN API
    // ===============================


    return {


        // react-hook-form
        register,

        control,

        watch,

        setValue,

        reset,

        errors,


        // submit
        submit,



        // product state
        productType,

        setProductType,



        editingId,

        setEditingId,

        isEditing,



        // images

        imageFiles,

        imagePreview,

        existingImages,


        selectedImage,

        setSelectedImage,


        addImage,

        removeImage,



        // inventory/UI

        isUnlimited,

        setIsUnlimited,


        taxIncluded,

        setTaxIncluded,


        isPublishing,


        imageError,



        // edit

        populateForm,



        // fields

        colors,


        // reset helper

        resetProductState,


    };

}