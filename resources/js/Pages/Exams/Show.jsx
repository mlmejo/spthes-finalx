import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Show({ auth, exam }) {
  const [answers, setAnswers] = useState();

  return (
    <StudentLayout auth={auth}>
      <Head title="Take Exam" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {exam.items.map((item) => {
            return (
              <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                <p className="mb-4">{item.question}</p>
                {item.choices.map((choice) => {
                  return (
                    <div class="mb-4 flex items-center">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio"
                        class="h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-gray-900"
                      >
                        {choice.answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </StudentLayout>
  );
}
