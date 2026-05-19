import AdminProfileCard from "@/src/components/dashboard/settings/general/AdminProfileCard";
import ChangePasswordCard from "@/src/components/dashboard/settings/general/ChangePasswordCard";
import ProfileUpdateForm from "@/src/components/dashboard/settings/general/ProfileUpdateForm";


export default function SettingsPage() {
  return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <AdminProfileCard />
            <ChangePasswordCard />
          </div>

          <ProfileUpdateForm />
        </section>
  );
}