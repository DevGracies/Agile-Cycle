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


export interface CreateProductFormValues {

    name: string;

    description: string;

    shortDescription: string;

    price: number;

    discountPrice?: number;

    stock: number;

    inventoryStatus: InventoryStatus;

    category: string;

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


const EMPTY_IMAGE_ARRAY =
    Array(MAX_IMAGES).fill(null);


const DEFAULT_VALUES: CreateProductFormValues = {

    name: "",

    description: "",

    shortDescription: "",

    price: 0,

    discountPrice: undefined,

    stock: 0,

    inventoryStatus:
        "in-stock",

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

        formState:{
            errors,
        },

    } = useForm<CreateProductFormValues>({

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



            /**
             * Remove cloud image
             * from this slot.
             *
             * The backend will know
             * this image was replaced.
             */
            setExistingImages(
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


        },
        [
            revokePreview
        ]
    );





const removeImage =
    useCallback(
        (
            index:number
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



            /**
             * Mark existing cloud
             * image as removed.
             */
            setExistingImages(
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


        },
        [
            revokePreview
        ]
    );




// ===============================
// FORMDATA BUILDER
// ===============================


const buildFormData =
    useCallback(
        (
            values:
            CreateProductFormValues
        ) => {


            const formData =
                new FormData();



            Object.entries(
                values
            )
            .forEach(
                (
                    [
                        key,
                        value
                    ]
                ) => {


                    if (
                        value === undefined ||
                        value === null
                    ) {

                        return;

                    }



                    if (
                        typeof value ===
                        "object"
                    ) {

                        formData.append(
                            key,
                            JSON.stringify(
                                value
                            )
                        );

                        return;

                    }



                    formData.append(
                        key,
                        String(value)
                    );


                }
            );




            /**
             * Only send valid
             * existing images.
             */
            const keptImages =
                existingImages.filter(
                    (
                        image
                    ): image is ExistingImage =>
                        Boolean(image)
                );



            formData.append(
                "existingImages",
                JSON.stringify(
                    keptImages
                )
            );




            /**
             * New uploads
             */
            imageFiles
                .filter(
                    (
                        file
                    ): file is File =>
                        Boolean(file)
                )
                .forEach(
                    (
                        file
                    ) => {

                        formData.append(
                            "images",
                            file
                        );

                    }
                );



            return formData;


        },
        [
            existingImages,
            imageFiles,
        ]
    );





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



                switch(
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



                resetProductState();



            }
            catch(error){


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




            /**
             * Product type conversion
             *
             * Backend:
             * bike
             * accessory
             * enhancement
             *
             * Frontend:
             * ebikes
             * accessories
             * enhancements
             */
            const productTypeMap:
                Record<
                    string,
                    ProductType
                > =
                {
                    bike:
                        "ebikes",

                    accessory:
                        "accessories",

                    enhancement:
                        "enhancements",

                };



            const mappedType =
                productTypeMap[
                    product.productType
                ];



            setProductType(
                mappedType ??
                "ebikes"
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
            imagePreview.forEach(
                preview => {

                    if (
                        preview?.startsWith(
                            "blob:"
                        )
                    ) {

                        URL.revokeObjectURL(
                            preview
                        );

                    }

                }
            );



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
            imagePreview,
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









// "use client";

// import {
//     useForm,
//     useFieldArray,
// } from "react-hook-form";

// import {
//     zodResolver
// } from "@hookform/resolvers/zod";

// import {
//     useCallback,
//     useEffect,
//     useState,
// } from "react";

// import toast from "react-hot-toast";

// import {
//     createProductSchema
// } from "@/src/validation/product";

// import {
//     ProductType
// } from "@/src/services/cart.service";

// import {
//     createEbike,
//     updateEbike,
// } from "@/src/services/ebike.service";

// import {
//     createAccessory,
//     updateAccessory,
// } from "@/src/services/accessory.service";

// import {
//     createEnhancement,
//     updateEnhancement,
// } from "@/src/services/enhancement.service";

// import {
//     apiError
// } from "../services/api.service";

// import {
//     Product
// } from "../types/product";

// type ExistingImage = {
//     public_id: string;
//     secure_url: string;
// };

// export interface CreateProductFormValues {
//     name: string;
//     description: string;
//     shortDescription: string;
//     price: number;
//     discountPrice?: number;
//     stock: number;
//     inventoryStatus:
//     | "in-stock"
//     | "low-stock"
//     | "out-of-stock";
//     category: string;
//     colors?: {
//         name: string;
//         color: string;
//     }[];
//     // variants?: {
//     //     name: string;
//     //     value: string;
//     // }[];
//     // features?: {
//     //     title: string;
//     //     description: string;
//     // }[];
//     // specs?: {
//     //     key: string;
//     //     value: string;
//     // }[];
// }

// const defaultValues: CreateProductFormValues = {
//     name: "",
//     description: "",
//     shortDescription: "",
//     price: 0,
//     discountPrice: 0,
//     stock: 0,
//     inventoryStatus: "in-stock",
//     category: "",
//     colors: [],
//     // variants: [],
//     // features: [],
//     // specs: []

// };

// export function useCreateProductForm() {
//     const {
//         register,
//         control,
//         watch,
//         setValue,
//         reset,
//         handleSubmit,
//         formState: {
//             errors
//         }
//     } = useForm<CreateProductFormValues>({
//         resolver: zodResolver(
//             createProductSchema
//         ),
//         defaultValues,
//         mode: "onChange"
//     });

//     // PRODUCT TYPE
//     const [
//         productType,
//         setProductType
//     ] = useState<ProductType>(
//         "ebikes"
//     );

//     const [
//         editingId,
//         setEditingId
//     ] = useState<string | null>(null);

//     const isEditing = Boolean(editingId);

//     // IMAGES
//     const [
//         imageFiles,
//         setImageFiles
//     ] = useState<(File | null)[]>([
//         null,
//         null,
//         null,
//         null
//     ]);

//     const [
//         imagePreview,
//         setImagePreview
//     ] = useState<(string | null)[]>([
//         null,
//         null,
//         null,
//         null
//     ]);

//     const [
//         existingImages,
//         setExistingImages
//     ] = useState<ExistingImage[]>([]);

//     const [
//         selectedImage,
//         setSelectedImage
//     ] = useState(0);

//     const [
//         imageError,
//         setImageError
//     ] = useState("");

//     const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

//     // OTHER UI STATES
//     const [
//         isUnlimited,
//         setIsUnlimited
//     ] = useState(true);

//     const [
//         taxIncluded,
//         setTaxIncluded
//     ] = useState<
//         "yes" | "no"
//     >("yes");

//     const [
//         isPublishing,
//         setIsPublishing
//     ] = useState(false);

//     // FIELD ARRAYS
//     const colors =
//         useFieldArray({
//             control,
//             name: "colors"
//         });

//     // const variants =
//     //     useFieldArray({
//     //         control,
//     //         name: "variants"
//     //     });

//     // const features =
//     //     useFieldArray({
//     //         control,
//     //         name: "features"
//     //     });

//     // const specs =
//     //     useFieldArray({
//     //         control,
//     //         name: "specs"
//     //     });

//     useEffect(() => {
//         return () => {
//             imagePreview.forEach(url => {
//                 if (url?.startsWith("blob:")) {
//                     URL.revokeObjectURL(url);
//                 }
//             });
//         };
//     }, [imagePreview]);
//     // ADD IMAGE
//     const addImage = useCallback(
//         (
//             file: File,
//             index: number
//         ) => {
//             if (
//                 !file.type.startsWith("image/")
//             ) {
//                 toast.error(
//                     "Only image files are allowed"
//                 );
//                 return;
//             }

//             if (
//                 file.size > MAX_IMAGE_SIZE
//             ) {
//                 setImageError(
//                     "Image size cannot exceed 5MB"
//                 );
//                 toast.error(
//                     `${file.name} exceeds 5MB`
//                 );
//                 return;
//             }
//             const preview = URL.createObjectURL(file);

//             setImageFiles(prev => {
//                 const updated = [
//                     ...prev
//                 ];
//                 updated[index] = file;
//                 return updated;
//             });
//             setImagePreview(prev => {
//                 const updated = [
//                     ...prev
//                 ];
//                 if (
//                     updated[index]?.startsWith(
//                         "blob:"
//                     )
//                 ) {
//                     URL.revokeObjectURL(
//                         updated[index]!
//                     );
//                 }
//                 updated[index] = preview;
//                 return updated;
//             });

//             // remove old cloud image in same slot
//             setExistingImages(prev => {
//                 const updated = [...prev];
//                 updated[index] = null as any;
//                 return updated;
//             });
//         }, []
//     );

//     // REMOVE IMAGE
//     const removeImage = useCallback(
//         (
//             index: number
//         ) => {
//             setImageFiles(prev => {
//                 const updated = [
//                     ...prev
//                 ];
//                 updated[index] = null;
//                 return updated;
//             });
//             setImagePreview(prev => {
//                 const updated = [
//                     ...prev
//                 ];
//                 if (
//                     updated[index]?.startsWith(
//                         "blob:"
//                     )
//                 ) {
//                     URL.revokeObjectURL(
//                         updated[index]!
//                     );
//                 }
//                 updated[index] = null;
//                 return updated;
//             });
//             setExistingImages(prev => {
//                 const updated = [...prev];
//                 updated[index] = null as any;
//                 return updated;
//             });
//         }, []
//     );

//     // SUBMIT
//     const submit =
//         handleSubmit(
//             async (values) => {
//                 if (
//                     existingImages.length === 0 &&
//                     imageFiles.every(
//                         file => file === null
//                     )
//                 ) {
//                     toast.error(
//                         "At least one product image is required"
//                     );
//                     return;
//                 }
//                 try {
//                     setIsPublishing(true);
//                     const formData = new FormData();

//                     Object.entries(values)
//                         .forEach(
//                             ([key, value]) => {
//                                 if (
//                                     value === undefined ||
//                                     value === null
//                                 ) {
//                                     return;
//                                 }
//                                 if (
//                                     typeof value === "object"
//                                 ) {
//                                     formData.append(
//                                         key,
//                                         JSON.stringify(value)
//                                     );
//                                 }
//                                 else {

//                                     formData.append(
//                                         key,
//                                         String(value)
//                                     );
//                                 }
//                             }
//                         );

//                     formData.append(
//                         "existingImages",
//                         JSON.stringify(
//                             existingImages.filter(Boolean)
//                         )
//                     );

//                     //   New images
//                     imageFiles
//                         .filter(
//                             (
//                                 file
//                             ): file is File =>
//                                 file !== null
//                         )
//                         .forEach(
//                             file => {
//                                 formData.append(
//                                     "images",
//                                     file
//                                 );
//                             }
//                         );

//                     let response;
//                     switch (productType) {
//                         case "ebikes":
//                             response =
//                                 isEditing

//                                     ? await updateEbike(
//                                         editingId!,
//                                         formData
//                                     )
//                                     : await createEbike(
//                                         formData
//                                     );
//                             break;
//                         case "accessories":
//                             response =
//                                 isEditing
//                                     ? await updateAccessory(
//                                         editingId!,
//                                         formData
//                                     )
//                                     : await createAccessory(
//                                         formData
//                                     );
//                             break;
//                         case "enhancements":
//                             response =
//                                 isEditing
//                                     ? await updateEnhancement(
//                                         editingId!,
//                                         formData
//                                     )
//                                     : await createEnhancement(
//                                         formData
//                                     );
//                             break;
//                     }
//                     toast.success(
//                         response?.message ??
//                         "Product saved successfully"
//                     );
//                     reset(
//                         defaultValues
//                     );
//                     setEditingId(null);
//                     setExistingImages([]);
//                     setImageFiles([
//                         null,
//                         null,
//                         null,
//                         null
//                     ]);

//                     setImagePreview([
//                         null,
//                         null,
//                         null,
//                         null
//                     ]);
//                     setSelectedImage(0);
//                     setIsUnlimited(true);
//                     setTaxIncluded("yes");
//                 }
//                 catch (error) {
//                     console.error(error);
//                     toast.error(
//                         apiError(error) ??
//                         "Failed to save product"
//                     );
//                 }
//                 finally {

//                     setIsPublishing(false);
//                 }
//             }
//         );

//     const populateForm = useCallback(
//         (product: Product) => {
//             const validInventoryStatuses:
//                 CreateProductFormValues["inventoryStatus"][]
//                 = [
//                     "in-stock",
//                     "low-stock",
//                     "out-of-stock",
//                 ];
//             const inventoryStatus =
//                 validInventoryStatuses.includes(
//                     product.inventoryStatus as CreateProductFormValues["inventoryStatus"]
//                 )
//                     ? product.inventoryStatus as CreateProductFormValues["inventoryStatus"]
//                     : "in-stock";
//             // const variantsValue =
//             //     "variants" in product &&
//             //         product.variants
//             //         ? product.variants.map(
//             //             variant => ({
//             //                 name: variant.name,
//             //                 value:
//             //                     variant.description ??
//             //                     variant.image ??
//             //                     ""
//             //             })
//             //         )
//             //         : [];
//             // const specsValue =
//             //     "specs" in product &&
//             //         product.specs
//             //         ? Object.entries(
//             //             product.specs
//             //         )
//             //             .map(
//             //                 ([key, value]) => ({
//             //                     key,
//             //                     value: String(value)
//             //                 })
//             //             )
//             //         : [];
//             const productTypeMap:
//                 Record<string, ProductType>
//                 = {
//                 bike: "ebikes",
//                 accessory: "accessories",
//                 enhancement: "enhancements"
//             };

//             const type =
//                 productTypeMap[product.productType];
//             console.log("Type ", type);

//             setProductType(type);

//             reset({
//                 name: product.name ?? "",
//                 description: product.description ?? "",
//                 shortDescription: product.shortDescription ?? "",
//                 price: product.price ?? 0,
//                 discountPrice: product.discountPrice,
//                 stock: product.stock ?? 0,
//                 inventoryStatus,
//                 category: product.category ?? "",
//                 colors: product.colors ?? [],
//                 // variants: variantsValue,
//                 // features: product.features ?? [],
//                 // specs: specsValue,
//             });

//             setEditingId(
//                 product._id
//             );
//             const productImages =
//                 (product.images ?? [])
//                     .map(
//                         image => ({
//                             public_id:
//                                 image.public_id ?? "",
//                             secure_url:
//                                 image.secure_url ?? ""
//                         })
//                     );
//             setExistingImages(productImages.slice(0, 4));
//             // setImagePreview([

//             //     ...productImages.map(
//             //         image => image.secure_url
//             //     ),
//             //     null,
//             //     null,
//             //     null
//             // ].slice(0, 4));

//             const previews = Array(4).fill(null);

//             productImages.forEach((image, index) => {
//                 previews[index] = image.secure_url;
//             });

//             imagePreview.forEach(url => {
//                 if (url?.startsWith("blob:")) {
//                     URL.revokeObjectURL(url);
//                 }
//             });

//             setImagePreview(previews);

//             setImageFiles([
//                 null,
//                 null,
//                 null,
//                 null
//             ]);
//         }, [reset]
//     );
//     return {
//         register,
//         control,
//         watch,
//         setValue,
//         errors,
//         reset,
//         submit,
//         productType,
//         setProductType,
//         imageFiles,
//         imagePreview,
//         existingImages,
//         selectedImage,
//         setSelectedImage,
//         addImage,
//         removeImage,
//         isUnlimited,
//         setIsUnlimited,
//         taxIncluded,
//         setTaxIncluded,
//         isPublishing,
//         imageError,
//         populateForm,
//         editingId,
//         setEditingId,
//         isEditing,
//         colors,
//         // variants,
//         // features,
//         // specs,
//     };
// }
