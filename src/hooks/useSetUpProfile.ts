import toast from "react-hot-toast";
import { profileSetUp } from "../services/user.service";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useSetUpProfile = () => {
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [ridingPurpose, setRidingPurpose] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        try {
            await profileSetUp({
                country,
                state,
                ridingPurpose
            });
            router.push("/cyclingLifeStyle")
        } catch (error) {
            toast.error(error instanceof Error ? error.message : "Failed to set up cycling experience")
        } finally {
            setIsLoading(false)
        }
    };

    return {
        country,
        setCountry,
        state,
        setState,
        ridingPurpose,
        setRidingPurpose,
        isLoading,
        handleSubmit,
    }
}
