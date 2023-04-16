import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Item from "./Partials/Item";

export default function Create({ auth, registration }) {
  const { data, setData, post, processing, errors } = useForm({
    title: "Sample Title",
    description: "Sample Description",
    questions: [],
  });

  const [noOfQuestions, setNoOfQuestions] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setData("questions", questions);
  }, [questions]);

  const generate = () => {
    const baz = [];

    for (let i = 0; i < noOfQuestions; i++) {
      baz.push({
        id: i,
        question: "Sample Question",
        choices: [
          { id: 1, content: "Sample Option 1", is_correct: false },
          { id: 2, content: "Sample Option 2", is_correct: false },
          { id: 3, content: "Sample Option 3", is_correct: false },
          { id: 4, content: "Sample Option 4", is_correct: false },
        ],
      });
    }

    setQuestions(baz);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("registrations.exams.store", registration.id));
  };

  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title="Create Exam" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl space-y-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <PrimaryButton className="mb-4" onClick={submit} disabled={false}>
              Save
            </PrimaryButton>
            <div className="max-w-xl">
              <TextInput
                placeholder="Exam title"
                value={data.title}
                onChange={(e) => {
                  setData("title", e.target.value);
                }}
                className="mt-1 block w-full"
                required
              />
            </div>
            <div className="mt-4 max-w-xl">
              <TextInput
                placeholder="Exam description (optional)"
                value={data.description}
                onChange={(e) => {
                  setData("description", e.target.value);
                }}
                className="mt-1 block w-full"
              />
            </div>

            <div className="mt-4 flex max-w-xl items-center">
              <TextInput
                type="number"
                placeholder="Number of items"
                value={noOfQuestions}
                onChange={(e) => {
                  setNoOfQuestions(e.target.value);
                }}
                className="mt-1 block w-full"
              />
              <PrimaryButton
                onClick={generate}
                className="ml-2"
                disabled={processing}
              >
                Generate
              </PrimaryButton>
            </div>
          </div>

          {questions.map((question, index) => {
            return (
              <div key={index}>
                <Item id={index} data={questions} dispatcher={setQuestions} />
              </div>
            );
          })}
        </div>
      </div>
    </TeacherLayout>
  );
}
