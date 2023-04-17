import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
  let sections = [
    {
      id: 1,
      name: "Balagtas",
      teacher_name: "Caalim",
    },
    {
      id: 2,
      name: "Mabinui",
      teacher_name: "Joshau",
    },
    {
      id: 3,
      name: "Kamote",
      teacher_name: "Trillo",
    },
    {
      id: 4,
      name: "Balagtas",
      teacher_name: "Caalim",
    },
    {
      id: 5,
      name: "Mabinui",
      teacher_name: "Joshau",
    },
    {
      id: 6,
      name: "Kamote",
      teacher_name: "Trillo",
    },
  ];

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
          <div className="grid gap-5 overflow-hidden bg-white shadow-sm sm:rounded-lg md:grid-cols-3">
            {sections.map((data, index) => {
              return (
                <div
                  href="#"
                  key={index}
                  class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.name}
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    Adviser {data.teacher_name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}
