"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Loader from "../ui/Loader";
import { useAuth } from "@/src/context/AuthProvider";

export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        user,
        isLoading,
        isAuthenticated,
    } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            const redirect = encodeURIComponent(window.location.pathname);

            toast.error("Please sign in to continue.");

            router.replace(`/signin?redirect=${redirect}`);
        }
    }, [isLoading, user, router]);

    if (isLoading || !isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader size={35} />
            </div>
        );
    }

    return children;
}