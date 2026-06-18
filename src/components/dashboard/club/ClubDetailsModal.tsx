"use client";

import { ClubLog } from "@/src/types/club";
import { X, ImageIcon, RedoIcon, ArrowLeftIcon, Trash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../reviews/Input";
import { StatusBadge } from "../common/Dashboard";
import Image from "next/image";

type ClubLogModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedLog: ClubLog | null;
    mode: "create" | "edit";
};

const ClubDetailsModal = ({
    open,
    setOpen,
    selectedLog,
    mode,
}: ClubLogModalProps) => {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [isClubInfoActive, setIsClubInfoActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        info: "",
    });

    useEffect(() => {
        if (mode === "edit" && selectedLog) {
            setFormData({
                title: selectedLog.title,
                image: selectedLog.image ?? "",
                info: selectedLog.info ?? "",
            });

            setImagePreview(null);
        }

        if (mode === "create") {
            setFormData({
                title: "",
                image: "",
                info: "",
            });

            setImagePreview(null);
        }
    }, [mode, selectedLog]);


    //   Handle open/close animation
    useEffect(() => {
        if (open) {
            setTimeout(() => setShow(true), 10);
            document.body.style.overflow = "hidden"; // prevent background scroll
        } else {
            setShow(false);
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    useEffect(() => {
        return () => {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
        };
    }, [imagePreview]);


    //   Outside click close
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(e.target as Node)
        ) {
            setOpen(false);
        }
    };


    //   Image upload handler
    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        const previewUrl =
            URL.createObjectURL(file);

        setImagePreview(previewUrl);

        setFormData((prev) => ({
            ...prev,
            image: previewUrl,
        }));
    };

    const counts = [
        {
            title: "comments",
            count: selectedLog?.comments ?? 0,
        },
        {
            title: "likes",
            count: selectedLog?.likes ?? 0,
        },
        {
            title: "views",
            count: (selectedLog as ClubLog)?.views ?? 0,
        },
    ];

    const handleRemoveImage = () => {
        // Remove uploaded preview
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        setImagePreview(null);

        setFormData((prev) => ({
            ...prev,
            image: "",
        }));

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const displayImage =
        imagePreview ||
        formData.image ||
        null;

    console.log(selectedLog?.image)
    if (!open) return null;

    return (
        <div
            onClick={handleOutsideClick}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300
      ${show
                    ? "bg-black/60 backdrop-blur-sm opacity-100"
                    : "bg-black/0 backdrop-blur-0 opacity-0"
                }`}
        >
            <div
                ref={modalRef}
                className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl text-sm bg-white shadow-2xl transition-all duration-300
        ${show
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#EEF1EC] px-6 py-5 sticky top-0 bg-white z-10">
                    <h2 className="flex items-center gap-4 text-lg text-[#111827] font-semibold">
                        {mode === "create" ? "Create Post" : "Edit Post Details"}
                        {mode === "create" && (
                            <div className="flex items-center justify-center bg-secondary p-1 text-sm text-white rounded-md w-12">NEW</div>
                        )}
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="w-10 h-10 rounded-full cursor-pointer border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>

                {/* BODY */}
                <div className="p-6 space-y-16">
                    {/* TITLE */}
                    <Input
                        label="Post Title"
                        value={
                            formData.title ||
                            selectedLog?.title ||
                            ""
                        }
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }
                        placeholder="Tips and Tricks for Keeping Your E-bike in Top Condition"
                    />

                    <div>
                        {isClubInfoActive ? (
                            <div className="space-y-4">
                                <div className="w-full h-[2px] bg-secondary rounded" />
                                <button
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setIsClubInfoActive(false)}
                                >
                                    <ArrowLeftIcon size={16} /> Go back
                                </button>
                                <textarea
                                    value={formData.info || selectedLog?.info || ""}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, info: e.target.value }))}
                                    placeholder="Click to start creating your club"
                                    className={`w-full h-[400px] rounded border border-[#CBE0CD] bg-[#F7FCF7] p-4 text-sm outline-none shadow-[inset_0px_2px_0px_0px_#E7EBEE33] focus:border-primary focus:outline-none `}

                                />
                            </div>
                        ) : (
                            <div className="space-y-16">
                                {/* IMAGE UPLOAD */}
                                <div>
                                    <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
                                        Images & Video (Optional)
                                    </label>

                                    <div
                                        className="relative w-full h-[250px] rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center overflow-hidden"
                                    >
                                        {displayImage ? (
                                            <Image
                                                src={displayImage}
                                                width={500}
                                                height={500}
                                                alt="Preview"
                                                className="w-full h-full object-cover rounded-md"
                                            />
                                        ) : (
                                            <div className="flex flex-col items-center gap-4">
                                                <ImageIcon size={30} />
                                                <p className="text-gray-500">
                                                    Added image will preview here
                                                </p>
                                            </div>
                                        )}

                                        {!displayImage ? (
                                            <button
                                                onClick={() =>
                                                    fileInputRef.current?.click()
                                                }
                                                className="absolute bottom-2 left-4 cursor-pointer flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-md text-gray-600 hover:text-black">
                                                <ImageIcon size={16} alt="Browse Image Icon" /> Browse
                                            </button>
                                        ) : (
                                            <div>
                                                <button
                                                    onClick={handleRemoveImage}
                                                    className="absolute top-2 right-4 cursor-pointer flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-md text-gray-600 hover:text-black">
                                                    <Trash size={16} /> Remove
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        fileInputRef.current?.click()
                                                    }
                                                    className="absolute bottom-2 right-4 cursor-pointer flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-md text-gray-600 hover:text-black">
                                                    <RedoIcon size={16} /> Replace
                                                </button>
                                            </div>
                                        )}

                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            hidden
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>

                                {/* INFO */}
                                <div className="space-y-4">
                                    <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
                                        Post Info
                                    </label>

                                    <div className="relative w-full h-[150px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center">
                                        <p className="text-gray-500">
                                            Club Info preview will appear here
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="space-y-3">
                                            <p>Tag</p>
                                            <button
                                                onClick={() => setIsClubInfoActive(true)}
                                                className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                                Questions
                                            </button>
                                        </div>

                                        <p className="text-primary">
                                            Date published:{" "}
                                            {selectedLog?.createdAt
                                                ? new Date(
                                                    selectedLog?.createdAt,
                                                ).toDateString()
                                                : "Nil"}
                                        </p>
                                    </div>
                                </div>

                                {/* COUNTS */}
                                {mode === "edit" && (
                                    <div className="flex justify-between">
                                        <div className="flex gap-20">
                                            {counts.map((item) => (
                                                <div
                                                    key={item.title}
                                                    className="flex gap-4 py-2"
                                                >
                                                    <div className="w-1 h-16 bg-gradient-to-b from-secondary to-primary rounded" />

                                                    <div className="h-16 flex flex-col justify-between">
                                                        <p className="text-gray-600">
                                                            No of {item.title}
                                                        </p>
                                                        <p className="font-semibold">
                                                            {item.count}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h2 className="pr-20"><span className="font-semibold text-gray-600">Status:</span> <StatusBadge status={selectedLog?.status as string} /></h2>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between">
                        {mode === "edit" ? (
                            <>
                                <button className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    {isClubInfoActive ? "Publish" : "Approve Club"}
                                </button>

                                <button className="h-[50px] px-12 py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Open to view comments
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    {isClubInfoActive ? "Publish" : "Create Club"}
                                </button>

                                <button className="h-[50px] px-12 py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Save as Draft
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubDetailsModal;