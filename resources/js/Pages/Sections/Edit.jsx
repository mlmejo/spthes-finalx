import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import UpdateSectionForm from "./Partials/UpdateSectionForm";
import TeacherSelectionForm from "./Partials/TeacherSelectionForm";
import DeleteSectionForm from "./Partials/DeleteSectionForm";
import SectionContext from "./SectionContext";
import StudentSelectionForm from "./Partials/StudentSelectionForm";

export default function Edit({ auth, section }) {
  return (
    <AdminLayout auth={auth}>
      <Head title={"Section " + section.name} />

      <div className="py-6">
        <SectionContext.Provider value={section}>
          <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
              <UpdateSectionForm />
            </div>

            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
              <TeacherSelectionForm />
            </div>

            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
              <StudentSelectionForm />
            </div>

            <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
              <DeleteSectionForm />
            </div>
          </div>
        </SectionContext.Provider>
      </div>
    </AdminLayout>
  );
}
