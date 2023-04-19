import AdminLayout from "@/Layouts/AdminLayout";

import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, teacher }) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    name: teacher.user.name,
    email: teacher.user.email,
  });
  console.log(teacher);

  const submit = (e) => {
    e.preventDefault();

    patch(route("teachers.update", teacher), {
      onSuccess: () => reset(),
    });
  };

  return (
    <AdminLayout auth={auth}>
      <Head title="Edit Teacher Information" />
      <form onSubmit={submit} className="min-w-xl m-16 w-full">
        <div className="max-w-xl">
          <div className="w-full bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <InputLabel value="Teacher name" />
            <TextInput
              type={"text"}
              className="w-full"
              name="name"
              value={data.name}
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <InputLabel value="Teacher email" />
            <TextInput
              type={"email"}
              name="email"
              className="w-full"
              value={data.email}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <button
              type="submit"
              className="rounded-md bg-gray-700 px-3 py-1 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
