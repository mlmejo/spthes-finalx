import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import TeacherLayout from "@/Layouts/TeacherLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function Import({ auth, registration }) {
  const { data, setData, post, processing, errors } = useForm({
    document: undefined,
    title: "",
    description: "",
  });

  const [filename, setFilename] = useState("");

  const submit = (e) => {
    e.preventDefault();

    post(route("registrations.exams.import.store", registration.id));
  };

  return (
    <TeacherLayout auth={auth}>
      <Head title="Import CSV" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl space-y-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <p>Section {registration.section.name}</p>
            <form onSubmit={submit}>
              <div className="mt-4 max-w-xl">
                <InputLabel htmlFor="document" value="Document" />
                <input
                  id="document"
                  type="file"
                  name="document"
                  value={filename}
                  className="relative m-0 mt-1 block w-full min-w-0 flex-auto rounded-md border border-gray-300 bg-clip-padding px-3 py-[0.32rem] text-sm text-gray-900 subpixel-antialiased shadow-sm transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-md file:rounded-r-none file:border file:bg-gray-800 file:px-2.5 file:py-2.5 file:font-sans file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-white file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] file:hover:bg-gray-700  focus:border-indigo-500 focus:text-neutral-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  onChange={(e) => {
                    setData("document", e.target.files[0]);
                    setFilename(e.target.value);
                  }}
                  required
                />

                <InputError message={errors.document} className="mt-2" />
              </div>

              <div className="mt-4 max-w-xl">
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

              <PrimaryButton className="mt-4" disabled={processing}>
                Submit
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}
