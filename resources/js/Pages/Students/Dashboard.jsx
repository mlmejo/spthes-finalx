import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
  return (
    <StudentLayout
      auth={auth}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">You're logged in!</div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
