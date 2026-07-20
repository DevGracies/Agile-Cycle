"use client";

import {
    useForm,
    useFieldArray,
} from "react-hook-form";

import {
    zodResolver
} from "@hookform/resolvers/zod";

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import toast from "react-hot-toast";

import {
    createProductSchema
} from "@/src/validation/product";

import {
    ProductType
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
    apiError
} from "../services/api.service";

import {
    Product
} from "../types/product";

type ExistingImage = {
    public_id: string;
    secure_url: string;
};

export interface CreateProductFormValues {
    name: string;
    description: string;
    shortDescription: string;
    price: number;
    discountPrice?: number;
    stock: number;
    inventoryStatus:
    | "in-stock"
    | "low-stock"
    | "out-of-stock";
    category: string;
    colors?: {
        name: string;
        color: string;
    }[];
    // variants?: {
    //     name: string;
    //     value: string;
    // }[];
    // features?: {
    //     title: string;
    //     description: string;
    // }[];
    // specs?: {
    //     key: string;
    //     value: string;
    // }[];
}

const defaultValues: CreateProductFormValues = {
    name: "",
    description: "",
    shortDescription: "",
    price: 0,
    discountPrice: 0,
    stock: 0,
    inventoryStatus: "in-stock",
    category: "",
    colors: [],
    // variants: [],
    // features: [],
    // specs: []

};

export function useCreateProductForm() {
    const {
        register,
        control,
        watch,
        setValue,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<CreateProductFormValues>({
        resolver: zodResolver(
            createProductSchema
        ),
        defaultValues,
        mode: "onChange"
    });

    // PRODUCT TYPE
    const [
        productType,
        setProductType
    ] = useState<ProductType>(
        "ebikes"
    );

    const [
        editingId,
        setEditingId
    ] = useState<string | null>(null);

    const isEditing = Boolean(editingId);

    // IMAGES
    const [
        imageFiles,
        setImageFiles
    ] = useState<(File | null)[]>([
        null,
        null,
        null,
        null
    ]);

    const [
        imagePreview,
        setImagePreview
    ] = useState<(string | null)[]>([
        null,
        null,
        null,
        null
    ]);

    const [
        existingImages,
        setExistingImages
    ] = useState<ExistingImage[]>([]);

    const [
        selectedImage,
        setSelectedImage
    ] = useState(0);

    const [
        imageError,
        setImageError
    ] = useState("");

    const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

    // OTHER UI STATES
    const [
        isUnlimited,
        setIsUnlimited
    ] = useState(true);

    const [
        taxIncluded,
        setTaxIncluded
    ] = useState<
        "yes" | "no"
    >("yes");

    const [
        isPublishing,
        setIsPublishing
    ] = useState(false);

    // FIELD ARRAYS
    const colors =
        useFieldArray({
            control,
            name: "colors"
        });

    // const variants =
    //     useFieldArray({
    //         control,
    //         name: "variants"
    //     });

    // const features =
    //     useFieldArray({
    //         control,
    //         name: "features"
    //     });

    // const specs =
    //     useFieldArray({
    //         control,
    //         name: "specs"
    //     });

    useEffect(() => {
        return () => {
            imagePreview.forEach(url => {
                if (url?.startsWith("blob:")) {
                    URL.revokeObjectURL(url);
                }
            });
        };
    }, [imagePreview]);
    // ADD IMAGE
    const addImage = useCallback(
        (
            file: File,
            index: number
        ) => {
            if (
                !file.type.startsWith("image/")
            ) {
                toast.error(
                    "Only image files are allowed"
                );
                return;
            }

            if (
                file.size > MAX_IMAGE_SIZE
            ) {
                setImageError(
                    "Image size cannot exceed 5MB"
                );
                toast.error(
                    `${file.name} exceeds 5MB`
                );
                return;
            }
            const preview = URL.createObjectURL(file);

            setImageFiles(prev => {
                const updated = [
                    ...prev
                ];
                updated[index] = file;
                return updated;
            });
            setImagePreview(prev => {
                const updated = [
                    ...prev
                ];
                if (
                    updated[index]?.startsWith(
                        "blob:"
                    )
                ) {
                    URL.revokeObjectURL(
                        updated[index]!
                    );
                }
                updated[index] = preview;
                return updated;
            });

            // remove old cloud image in same slot
            setExistingImages(prev => {
                const updated = [...prev];
                updated[index] = undefined as any;
                return updated.filter(Boolean);
            });
        }, []
    );

    // REMOVE IMAGE
    const removeImage = useCallback(
        (
            index: number
        ) => {
            setImageFiles(prev => {
                const updated = [
                    ...prev
                ];
                updated[index] = null;
                return updated;
            });
            setImagePreview(prev => {
                const updated = [
                    ...prev
                ];
                if (
                    updated[index]?.startsWith(
                        "blob:"
                    )
                ) {
                    URL.revokeObjectURL(
                        updated[index]!
                    );
                }
                updated[index] = null;
                return updated;
            });
            setExistingImages(prev => {
                const updated = [...prev];
                updated[index] = undefined as any;
                return updated.filter(Boolean);
            });
        }, []
    );

    // SUBMIT
    const submit =
        handleSubmit(
            async (values) => {
                if (
                    existingImages.length === 0 &&
                    imageFiles.every(
                        file => file === null
                    )
                ) {
                    toast.error(
                        "At least one product image is required"
                    );
                    return;
                }
                try {
                    setIsPublishing(true);
                    const formData = new FormData();

                    Object.entries(values)
                        .forEach(
                            ([key, value]) => {
                                if (
                                    value === undefined ||
                                    value === null
                                ) {
                                    return;
                                }
                                if (
                                    typeof value === "object"
                                ) {
                                    formData.append(
                                        key,
                                        JSON.stringify(value)
                                    );
                                }
                                else {

                                    formData.append(
                                        key,
                                        String(value)
                                    );
                                }
                            }
                        );

                    existingImages.filter(Boolean)

                    formData.append(
                        "existingImages",
                        JSON.stringify(
                            existingImages
                        )
                    );

                    //   New images
                    imageFiles
                        .filter(
                            (
                                file
                            ): file is File =>
                                file !== null
                        )
                        .forEach(
                            file => {
                                formData.append(
                                    "images",
                                    file
                                );
                            }
                        );

                    let response;
                    switch (productType) {
                        case "ebikes":
                            response =
                                isEditing

                                    ? await updateEbike(
                                        editingId!,
                                        formData
                                    )
                                    : await createEbike(
                                        formData
                                    );
                            break;
                        case "accessories":
                            response =
                                isEditing
                                    ? await updateAccessory(
                                        editingId!,
                                        formData
                                    )
                                    : await createAccessory(
                                        formData
                                    );
                            break;
                        case "enhancements":
                            response =
                                isEditing
                                    ? await updateEnhancement(
                                        editingId!,
                                        formData
                                    )
                                    : await createEnhancement(
                                        formData
                                    );
                            break;
                    }
                    toast.success(
                        response?.message ??
                        "Product saved successfully"
                    );
                    reset(
                        defaultValues
                    );
                    setEditingId(null);
                    setExistingImages([]);
                    setImageFiles([
                        null,
                        null,
                        null,
                        null
                    ]);

                    setImagePreview([
                        null,
                        null,
                        null,
                        null
                    ]);
                    setSelectedImage(0);
                    setIsUnlimited(true);
                    setTaxIncluded("yes");
                }
                catch (error) {
                    console.error(error);
                    toast.error(
                        apiError(error) ??
                        "Failed to save product"
                    );
                }
                finally {

                    setIsPublishing(false);
                }
            }
        );

    const populateForm = useCallback(
        (product: Product) => {
            const validInventoryStatuses:
                CreateProductFormValues["inventoryStatus"][]
                = [
                    "in-stock",
                    "low-stock",
                    "out-of-stock",
                ];
            const inventoryStatus =
                validInventoryStatuses.includes(
                    product.inventoryStatus as CreateProductFormValues["inventoryStatus"]
                )
                    ? product.inventoryStatus as CreateProductFormValues["inventoryStatus"]
                    : "in-stock";
            // const variantsValue =
            //     "variants" in product &&
            //         product.variants
            //         ? product.variants.map(
            //             variant => ({
            //                 name: variant.name,
            //                 value:
            //                     variant.description ??
            //                     variant.image ??
            //                     ""
            //             })
            //         )
            //         : [];
            // const specsValue =
            //     "specs" in product &&
            //         product.specs
            //         ? Object.entries(
            //             product.specs
            //         )
            //             .map(
            //                 ([key, value]) => ({
            //                     key,
            //                     value: String(value)
            //                 })
            //             )
            //         : [];
            const productTypeMap:
                Record<string, ProductType>
                = {
                bike: "ebikes",
                accessory: "accessories",
                enhancement: "enhancements"
            };

            const type =
                productTypeMap[product.productType];
            console.log("Type ", type);

            setProductType(type);

            reset({
                name: product.name ?? "",
                description: product.description ?? "",
                shortDescription: product.shortDescription ?? "",
                price: product.price ?? 0,
                discountPrice: product.discountPrice,
                stock: product.stock ?? 0,
                inventoryStatus,
                category: product.category ?? "",
                colors: product.colors ?? [],
                // variants: variantsValue,
                // features: product.features ?? [],
                // specs: specsValue,
            });

            setEditingId(
                product._id
            );
            const productImages =
                (product.images ?? [])
                    .map(
                        image => ({
                            public_id:
                                image.public_id ?? "",
                            secure_url:
                                image.secure_url ?? ""
                        })
                    );
            setExistingImages(productImages.slice(0, 4));
            // setImagePreview([

            //     ...productImages.map(
            //         image => image.secure_url
            //     ),
            //     null,
            //     null,
            //     null
            // ].slice(0, 4));

            const previews = Array(4).fill(null);

            productImages.forEach((image, index) => {
                previews[index] = image.secure_url;
            });

            imagePreview.forEach(url => {
                if (url?.startsWith("blob:")) {
                    URL.revokeObjectURL(url);
                }
            });

            setImagePreview(previews);

            setImageFiles([
                null,
                null,
                null,
                null
            ]);
        }, [reset]
    );
    return {
        register,
        control,
        watch,
        setValue,
        errors,
        reset,
        submit,
        productType,
        setProductType,
        imageFiles,
        imagePreview,
        existingImages,
        selectedImage,
        setSelectedImage,
        addImage,
        removeImage,
        isUnlimited,
        setIsUnlimited,
        taxIncluded,
        setTaxIncluded,
        isPublishing,
        imageError,
        populateForm,
        editingId,
        setEditingId,
        isEditing,
        colors,
        // variants,
        // features,
        // specs,
    };
}