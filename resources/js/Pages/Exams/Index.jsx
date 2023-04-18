import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, registration }) {
  return (
    <StudentLayout auth={auth}>
      <Head title="Dashboard" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-2 text-xl font-semibold">Exam List</h2>
          <p className="text-gray-800">Section: {registration.section.name}</p>
          <p className="mb-3 text-gray-800">
            Teacher: {registration.teacher.user.name}
          </p>

          <div className="grid gap-5 overflow-hidden shadow-sm sm:rounded-lg md:grid-cols-3">
            {registration.exams.map((exam) => {
              return (
                <a
                  href={route("registrations.exams.show", [
                    registration.id,
                    exam.id,
                  ])}
                  key={exam.id}
                  className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {exam.title}
                  </h5>
                  <p className="font-normal text-gray-700">
                    {exam.description}
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
