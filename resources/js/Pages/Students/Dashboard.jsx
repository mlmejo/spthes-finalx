import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, registrations }) {
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
          <h2 className="mb-3 text-xl font-semibold">Section List</h2>
          <div className="grid gap-5 overflow-hidden bg-white shadow-sm sm:rounded-lg md:grid-cols-3">
            {registrations.map((registration) => {
              return (
                <a
                  href={route("exams.index", registration.id)}
                  key={registration.id}
                  className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="section-title text-white">Section</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {registration.section.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Adviser {registration.teacher.user.name}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
