import CameraButton from "@/Components/CameraButton";
import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, exam, scores }) {
  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title="Results" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <CameraButton />
          <h2 className="mb-3 text-xl font-semibold">{exam.title}</h2>
          <div className="grid grid-cols-1 place-items-start gap-3 overflow-hidden p-4 md:grid-cols-3">
            {scores.map((score) => {
              return (
                <div className="block w-full rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100">
                  <p className="section-title text-gray-800">{score.name}</p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {score.score}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
