"use client";

import { BlogLog } from "@/src/types/blog";
import { Camera, X, Image, RedoIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../reviews/Input";
import { StatusBadge } from "../common/Dashboard";

type BlogLogModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedLog: BlogLog | null;
    mode: "create" | "edit";
};

const BlogDetailsModal = ({
    open,
    setOpen,
    selectedLog,
    mode,
}: BlogLogModalProps) => {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        info: "",
    });

    useEffect(() => {
        if (mode === "edit" && selectedLog) {
            setFormData({
                title: selectedLog.title || "",
                image: selectedLog.image,
                info: selectedLog.info,
            });
        }

        if (mode === "create") {
            setFormData({
                title: "",
                image: "",
                info: "",
            });
        }
    }, [mode, selectedLog]);

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);


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

        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
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
            count: (selectedLog as BlogLog)?.views ?? 0,
        },
    ];

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
                    <h2 className="text-2xl text-[#111827] font-bold">
                        {mode === "create" ? "Create Blog" : "Edit Blog"}
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
                        label="Blog Title"
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

                    {/* IMAGE UPLOAD */}
                    <div>
                        <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
                            Blog Cover Image
                        </label>

                        <div
                            onClick={() =>
                                fileInputRef.current?.click()
                            }
                            className="relative w-full h-[250px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
                        >
                            {imagePreview ? (
                                <Image
                                    src={imagePreview}
                                    width={500}
                                    height={500}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-md"
                                />
                            ) : (
                                <p className="text-gray-500">
                                    Added image will preview here
                                </p>
                            )}

                            <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 text-sm">
                                <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                                    <Image size={16} alt="Browse Image Icon" /> Browse
                                </button>

                                <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                                    <RedoIcon size={16} /> Replace
                                </button>
                            </div>

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
                            Blog Info
                        </label>

                        <div className="relative w-full h-[150px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center">
                            <p className="text-gray-500">
                                Blog Info preview will appear here
                            </p>
                        </div>

                        <div className="flex justify-between items-center">
                            <button className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                {mode === "create" ? "Open to Add" : "Open to Edit"}
                            </button>

                            <p className="text-primary">
                                Date published:{" "}
                                {selectedLog?.createdAt
                                    ? new Date(
                                        selectedLog?.createdAt,
                                    ).toLocaleDateString()
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

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between">
                        {mode === "edit" ? (
                            <>
                                <button className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Approve Blog
                                </button>

                                <button className="h-[50px] px-12 py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Open to view comments
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="h-[50px] px-12 py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Create Blog
                                </button>

                                <button className="h-[50px] px-12 py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Save Draft
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsModal;