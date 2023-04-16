import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import Item from "./Partials/Item";

export default function Create({ auth }) {
  const [data, setData] = useState("");
  const [questions, setQuestions] = useState(0);

  const gen = () => {
    const mock = [];
  
    for (let i = 0; i < data; i++) {
      mock.push({id: i, question: "", choices: [
        {content: "", is_correct: false},
        {content: "", is_correct: false},
        {content: "", is_correct: false},
        {content: "", is_correct: false},
      ]})
    }

    setQuestions(mock);
  }

  const generate = () => {
    setQuestions(data);
  };

  return (
    <TeacherLayout auth={auth} teacher={auth.teacher}>
      <Head title="Create Exam" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl space-y-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <div className="max-w-xl">
              <TextInput
                placeholder="Untitled exam"
                className="mt-1 block w-full"
              />
            </div>
            <div className="mt-4 max-w-xl">
              <TextInput
                placeholder="Exam description"
                className="mt-1 block w-full"
              />
            </div>

            <div className="mt-4 flex max-w-xl items-center">
              <TextInput
                type="number"
                placeholder="Number of items"
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
                className="mt-1 block w-full"
              />
              <PrimaryButton
                onClick={generate}
                className="ml-2"
                disabled={false}
              >
                Generate
              </PrimaryButton>
            </div>
          </div>

          {!questions > 0 ? (
            <></>
          ) : (
            Array.from(Array(parseInt(questions)), (e, i) => {
              return (
                <div key={i}>
                  <Item name={`item-${i}`} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </TeacherLayout>
  );
}
