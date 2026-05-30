import { dataPrivacyService } from "@/src/services/dataPrivacy.service";
import { DataPrivacyState, DataPrivacyToggleKeys } from "@/src/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useDataPrivacy = () => {
    const [settings, setSettings] = useState<any>(null);
      const [loading, setLoading] = useState(true);
      const [actionLoading, setActionLoading] = useState({
        runBackup: false,
        exportAll: false,
        exportData: false,
        resetFactory: false,
      });
    
      const fetch = async () => {
        try {
          const data = await dataPrivacyService.getSettings();
          console.log("Fetched settings:", data);
          setSettings(data);
        } catch (error) {
          console.error("Failed to fetch settings:", error);
          toast.error("Failed to load settings");
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        fetch();
      }, []);
    
      const setLoadingState = (key: keyof typeof actionLoading, value: boolean) => {
        setActionLoading((prev) => ({
          ...prev,
          [key]: value,
        }));
      };
    
      const handleToggle = async (key: DataPrivacyToggleKeys) => {
        const previousValue = settings[key];
        const nextValue = !previousValue;
    
        // console.log(`Toggling ${key} from ${previousValue} to ${nextValue}`);
        // Optimistic update
        setSettings((prev: DataPrivacyState | null) => ({
          ...prev,
          [key]: nextValue,
        }));
    
        try {
          const updatedSettings = await dataPrivacyService.toggleSetting(
            key,
            nextValue,
          );
          setSettings(updatedSettings);
          toast.success(
            `${key} ${nextValue ? "enabled" : "disabled"} successfully`,
          );
        } catch (error) {
          // Rollback if API call fails
          setSettings((prev: DataPrivacyState | null) => ({
            ...prev!,
            [key]: previousValue,
          }));
          toast.error(`Failed to update ${key}`);
          console.error("Toggle failed:", error);
        }
      };
    
      // UPDATE FIELD
      const handleUpdate = async <K extends keyof DataPrivacyState>(
        key: K,
        value: DataPrivacyState[K],
      ) => {
        const previous = settings[key];
    
        setSettings((prev: DataPrivacyState | null) => ({
          ...prev!,
          [key]: value,
        }));
        // console.log(`Updating ${key} from ${previous} to ${value}`);
    
        try {
          const updated = await dataPrivacyService.updateField(key, value);
          setSettings(updated);
          toast.success(`${key} updated successfully`);
        } catch (error) {
          setSettings((prev: DataPrivacyState | null) => ({
            ...prev!,
            [key]: previous,
          }));
          toast.error(`Failed to update ${key}`);
          console.error(error);
        }
      };
    
      const handleAction = {
        runBackup: async () => {
          try {
            setLoadingState("runBackup", true);
            const result = await dataPrivacyService.runBackup();
            toast.success(result || "Backup completed successfully");
            console.log(result);
          } catch (error) {
            toast.error("Failed to run backup");
            console.error(error);
          } finally {
            setLoadingState("runBackup", false);
          }
        },
        exportAll: async () => {
          try {
            setLoadingState("exportAll", true);
            const result = await dataPrivacyService.exportAll();
            toast.success(result || "All data exported successfully");
            console.log(result);
          } catch (error) {
            toast.error("Failed to export all data");
            console.error(error);
          } finally {
            setLoadingState("exportAll", false);
          }
        },
        exportData: async (module: string) => {
          try {
            setLoadingState("exportData", true);
            const result = await dataPrivacyService.exportData(module);
            toast.success(result || `Data exported for module: ${module}`);
            console.log(result);
          } catch (error) {
            toast.error(`Failed to export data for module: ${module}`);
            console.error(error);
          } finally {
            setLoadingState("exportData", false);
          }
        },
        resetFactory: async () => {
          try {
            setLoadingState("resetFactory", true);
            const result = await dataPrivacyService.restoreFactory();
            fetch(); // Refresh settings after reset
            toast.success(
              result.message || "Factory settings restored successfully",
            );
            console.log(result);
          } catch (error) {
            toast.error("Failed to restore factory settings");
            console.error(error);
          } finally {
            setLoadingState("resetFactory", false);
          }
        },
      };

      return {
        loading,
        settings,
        handleToggle,
        handleUpdate,
        handleAction,
        actionLoading,
      }
}