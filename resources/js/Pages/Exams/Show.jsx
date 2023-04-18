import PrimaryButton from "@/Components/PrimaryButton";
import StudentLayout from "@/Layouts/StudentLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Show({ auth, exam }) {
  const { data, setData, post, processing } = useForm({
    student_id: auth.student.id,
    answers: exam.items.map((item) => {
      return { id: item.id, value: "" };
    }),
  });

  const handleChangeAnswer = (e) => {
    const itemId = e.target.id.split("-").at(1);
    const choiceId = e.target.id.split("-").at(-1);

    setData(
      "answers",
      data.answers.map((answer) => {
        if (answer.id == itemId) {
          return { ...answer, value: choiceId };
        }

        return answer;
      })
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("exams.answers.store", exam.id));
  };

  return (
    <StudentLayout auth={auth}>
      <Head title="Take Exam" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <form onSubmit={submit}>
            {exam.items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="mb-4 bg-white p-4 shadow sm:rounded-lg sm:p-8"
                >
                  <p className="mb-4">{item.question}</p>
                  {item.choices.map((choice, index) => {
                    return (
                      <div key={choice.id} className="mb-4 flex items-center">
                        <input
                          id={`item-${item.id}-choice-${choice.id}`}
                          type="radio"
                          onChange={handleChangeAnswer}
                          name={`item-${item.id}}`}
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`item-${item.id}-choice-${index}`}
                          className="ml-2 text-sm font-medium text-gray-900"
                        >
                          {choice.answer}
                        </label>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <PrimaryButton disabled={processing}>Submit</PrimaryButton>
          </form>
        </div>
      </div>
    </StudentLayout>
  );
}
