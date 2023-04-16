import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, registrations }) {
  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title="Your Sections" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 place-items-start gap-3 overflow-hidden p-4 md:grid-cols-3">
            {registrations.map((registration) => {
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
            })}
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
