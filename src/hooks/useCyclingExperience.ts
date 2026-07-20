
import toast from "react-hot-toast";
import { setUpCyclingExperience } from "../services/user.service";
import { useState } from "react";
import { BikeType } from "../types/user";
import { useRouter } from "next/navigation";
import { apiError } from "../services/api.service";

export const useCyclingExperience = () => {
    const [bikeType, setBikeType] = useState<BikeType>("");
    const [bikeBrand, setBikeBrand] = useState("")
    const [clubName, setClubName] = useState("")
    const [belongsToClub, setBelongsToClub] = useState<"yes" | "no">("no");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)

        const isClub = belongsToClub === "yes" ? true : false;
        try {
            if (isClub && !clubName.trim()) {
                toast.error(
                    "Please enter your cycling club."
                );
                return;
            }
            await setUpCyclingExperience({
                bikeType,
                bikeBrand: bikeBrand.trim(),
                belongsToClub: isClub,
                clubName: isClub
                    ? clubName.trim()
                    : "",
            });
            router.push("/newsLetter")
        } catch (error) {
            toast.error(apiError(error) || "Failed to set up profile")
        } finally {
            setIsLoading(false)
        }
    };

    return {
        bikeType,
        setBikeType,
        bikeBrand,
        setBikeBrand,
        clubName,
        setClubName,
        belongsToClub,
        setBelongsToClub,
        isLoading,
        handleSubmit,
    }
}