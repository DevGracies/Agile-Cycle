"use client";

import { BlogLog } from "@/src/types/blog";
import { X, ImageIcon, RedoIcon, ArrowLeftIcon, Trash, ChevronLeft, ChevronRight, Check, Undo } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../reviews/Input";
import { StatusBadge } from "../common/Dashboard";
import Image from "next/image";
import { comments } from "@/src/mocks/index.mock";

type BlogLogModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    selectedLog: BlogLog | null;
    mode: "create" | "edit";
};

type ActiveModalType = "blogDetails" | "blogInfo" | "comments";

const BlogDetailsModal = ({
    open,
    setOpen,
    selectedLog,
    mode,
}: BlogLogModalProps) => {
    const [show, setShow] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState<ActiveModalType | null>("blogDetails");
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
                title: selectedLog.title ?? "",
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
            count: (selectedLog as BlogLog)?.views ?? 0,
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
                className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-white shadow-2xl transition-all duration-300 mx-auto

                ${show
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-300 px-4 sm:px-6 py-4 sm:py-5 sticky top-0 bg-white z-10">
                    <h2 className="text-base sm:text-lg md:text-xl text-[#111827] font-semibold">
                        {isActive === "blogInfo" ? "Blog Info" : "Blog Details"}
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="w-10 h-10 rounded-full cursor-pointer border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                        <X size={14} />
                    </button>
                </div>

                {/* BODY */}
                <div className="p-4 sm:p-6 lg:p-8 space-y-8 lg:space-y-10">
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

                    <div>
                        {isActive === "blogInfo" && (
                            <div className="space-y-4">
                                <div className="w-full h-[2px] bg-secondary/50 rounded" />
                                <button
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setIsActive("blogDetails")}
                                >
                                    <ArrowLeftIcon size={16} /> Go back
                                </button>
                                <textarea
                                    value={formData.info || selectedLog?.info || ""}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, info: e.target.value }))}
                                    placeholder="Click to start creating your blog"
                                    className={`w-full h-[400px] rounded border border-[#CBE0CD] bg-[#F7FCF7] p-4 text-sm outline-none shadow-[inset_0px_2px_0px_0px_#E7EBEE33] focus:border-primary focus:outline-none `}

                                />
                            </div>
                        )}
                        {isActive === "blogDetails" && (
                            <div className="space-y-16">
                                {/* IMAGE UPLOAD */}
                                <div>
                                    <label className="mb-2 block text-[16px] font-medium leading-[20px] tracking-[-0.15px] text-[#7A7A7A]">
                                        Blog Cover Image
                                    </label>

                                    <div
                                        className="relative w-full min-h-[220px] sm:h-[250px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center overflow-hidden"
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
                                                <ImageIcon size={16} /> Browse
                                            </button>
                                        ) : (
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <button
                                                    onClick={handleRemoveImage}
                                                    className="absolute top-2 right-2 sm:right-4 cursor-pointer flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-md text-gray-600 hover:text-black">
                                                    <Trash size={16} /> Remove
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        fileInputRef.current?.click()
                                                    }
                                                    className="absolute bottom-2 right-2 sm:right-4 cursor-pointer flex items-center gap-2 bg-white border border-gray-200 shadow-md px-4 py-2 rounded-md text-gray-600 hover:text-black">
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
                                        Blog Info
                                    </label>

                                    {selectedLog?.info ? (
                                        <div className="relative w-full h-[150px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200">
                                            <p className="text-gray-500">
                                                {selectedLog.info}
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-[150px] p-4 rounded-md border-2 bg-[#F7FCF7] border-gray-200 flex items-center justify-center">
                                            <p className="text-gray-500">
                                                Blog Info preview will appear here
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <button
                                            onClick={() => setIsActive("blogInfo")}
                                            className="h-[50px] px-6 sm:px-10 w-full md:w-auto py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                            {mode === "create" ? "Open to Add" : "Open to Edit"}
                                        </button>

                                        <p className="text-primary text-sm text-center md:text-right">
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
                                    <div className="flex flex-col xl:flex-row gap-6 xl:justify-between">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        <h2 className="flex items-center gap-2"><span className="font-semibold text-gray-600">Status:</span> <StatusBadge status={selectedLog?.status as string} /></h2>
                                    </div>
                                )}
                            </div>
                        )}
                        {isActive === "comments" && (
                            <div className="space-y-6">
                                <button
                                    className="flex items-center gap-2 cursor-pointer"
                                    onClick={() => setIsActive("blogDetails")}
                                >
                                    <ArrowLeftIcon size={16} /> Go back
                                </button>
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <button
                                        onClick={() => setIsFilter((prev) => !prev)}
                                        className="flex justify-between items-center cursor-pointer w-full sm:w-[220px] border border-gray-300 shadow p-4 rounded-md">
                                        <p>Filter by date</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-[2px] h-4 bg-primary" />
                                            {isFilter ? <ChevronLeft size={18} className="text-secondary" /> : <ChevronRight size={18} className="text-secondary" />}
                                        </div>
                                    </button>
                                    {isFilter && (
                                        <div className="flex flex-col md:flex-row gap-4 text-gray-600">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <p>From</p>
                                                <button className="px-4 py-3 border border-gray-300 rounded-md">
                                                    June 8, 2026
                                                </button>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                                <p>To</p>
                                                <button className="px-4 py-3 border border-gray-300 rounded-md">
                                                    June 9, 2026
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="w-full h-[2px] bg-secondary/50 rounded" />
                                <div className="space-y-8">
                                    {comments.map((comment) => (
                                        <div key={comment.id}>
                                            <div className="flex flex-col lg:flex-row gap-6 lg:justify-between">
                                                <div className="space-y-3">
                                                    <h2 className="text-primary">{comment.name}</h2>
                                                    <p>{comment.comment}</p>
                                                    <p className="text-gray-500">{comment.createdAt.toDateString()}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                                    <button
                                                        className="flex items-center justify-center gap-2 p-3 w-full sm:w-[140px] text-primary rounded-md border border-primary"
                                                    >
                                                        {!comment.isApproved ? (
                                                            <>
                                                                Approve <Check size={18} />
                                                            </>
                                                        ) : (
                                                            <>Undo <Undo size={18} /> </>
                                                        )}
                                                    </button>
                                                    <button
                                                        className="flex items-center justify-center gap-2 p-3 w-[120px] text-red-600"
                                                    >
                                                        Reject <X size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="w-full h-[2px] bg-gray-200 rounded mt-3" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                        {mode === "edit" ? (
                            <>
                                <button className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    {isActive === "blogDetails" && "Approve Blog"}
                                    {isActive === "blogInfo" && "Publish"}
                                    {isActive === "comments" && "Approve All"}
                                </button>

                                {isActive === "blogDetails" && (
                                    <button
                                        onClick={() => setIsActive("comments")}
                                        className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                        Open to view comments
                                    </button>
                                )}
                                {isActive === "blogInfo" && (
                                    <button
                                        className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                        Save as Draft
                                    </button>
                                )}
                                {isActive === "comments" && (
                                    <button className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                        Reject All
                                    </button>
                                )}
                            </>
                        ) : (
                            <>
                                <button className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-secondary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    {isActive === "blogInfo" ? "Save Blog" : "Approve blog"}
                                </button>

                                <button className="h-[50px] px-6 sm:px-10 w-full sm:w-auto py-4 rounded-lg bg-gray-200 border border-secondary text-secondary font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition">
                                    Save as Draft
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogDetailsModal;