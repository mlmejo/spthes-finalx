import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, registrations }) {
  let sections = [
    {
      id: 1,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
    {
      id: 2,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
    {
      id: 3,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
    {
      id: 4,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
    {
      id: 5,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
    {
      id: 6,
      section_name: "Balagtas",
      section_adviser: "Joshua Caalim",
    },
  ];

  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title="Your Sections" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xl font-semibold">Section List</h2>
          <div className="grid grid-cols-1 place-items-start gap-3 overflow-hidden p-4 md:grid-cols-3">
            {/* {registrations.map((registration) => {
              return (
                <a
                  key={registration.id}
                  href={route("teachers.registrations.show", [
                    auth.teacher.id,
                    registration.id,
                  ])}
                  className="block w-full cursor-pointer bg-white p-6 shadow hover:shadow-lg sm:rounded-lg"
                >
                  <h2 className="text-lg">{registration.section.name}</h2>
                  <p className="text-gray-500">
                    {registration.section.academic_level.name}
                  </p>
                </a>
              );
            })} */}

            {sections.map((data) => {
              return (
                <div
                  href="#"
                  key={data.id}
                  class="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <p className="section-title text-white">Section</p>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.section_name}
                  </h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">
                    Adviser {data.section_adviser}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
