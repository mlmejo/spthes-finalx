import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head } from "@inertiajs/react";

export default function show({ auth, registration }) {
  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title={`Section ${registration.section.name}`} />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <header className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                Section {registration.section.name}
              </h2>

              <flex className="space-x-4">
              <a
                href={route("registrations.exams.import", registration.id)}
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
              >
                Import CSV
              </a>
              <a
                href={route("registrations.exams.create", registration.id)}
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
              >
                Create Exam
              </a>
              </flex>
            </header>

            <h2 className="text-md mt-6 font-medium text-gray-800">
              Ongoing Examinations
            </h2>
            <ul className="text-md mt-2 w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900">
              {registration.exams.map((exam) => {
                return (
                  <li className="w-full border-b border-gray-200 px-4 py-2">
                    <a href={route("exams.answers.index", exam.id)}>
                      {exam.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <h2 className="text-md mt-6 font-medium text-gray-800">Students</h2>
            <ul className="text-md mt-2 w-full rounded-lg border border-gray-200 bg-white font-medium text-gray-900">
              {registration.students.map((student) => {
                return (
                  <li className="w-full border-b border-gray-200 px-4 py-2">
                    {student.user.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
