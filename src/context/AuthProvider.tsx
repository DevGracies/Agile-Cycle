"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { getUser } from "@/src/services/user.service";
import { User } from "@/src/types/user";
import { logout } from "../services/auth.service";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { apiError } from "../services/api.service";


interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;

    refreshUser: () => Promise<void>;
    setUser: React.Dispatch<
        React.SetStateAction<User | null>
    >;
    logOut: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const refreshUser = useCallback(async () => {
        try {
            setIsLoading(true);
            const response =
                await getUser();
            setUser(
                response.data ?? null
            );
        } catch (error) {
            setUser(null);
            console.error(
                apiError(error)
            );
        } finally {
            setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        refreshUser();
    }, [refreshUser]);

    const logOut = useCallback(async () => {
        try {
            await logout();
            setUser(null);
            router.push("/signin");
            toast.success("Logged out, Please sign in to continue.");
        } catch (error) {
            toast.error("Failed to logout. Please try again.");
            console.error(error);
        }
    }, []);
    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: Boolean(user),
                refreshUser,
                setUser,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context =
        useContext(AuthContext);
    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }
    return context;
}