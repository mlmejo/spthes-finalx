import AdminLayout from "@/Layouts/AdminLayout";

import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

import { Head, useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Edit({ auth, student }) {
  const { data, setData, patch, processing, errors, reset } = useForm({
    name: student.user.name,
    email: student.user.email,
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route("students.update", data), {
      onSuccess: () => reset(),
    });
  };

  console.log(student);
  return (
    <AdminLayout auth={auth}>
      <Head title="Edit Student Information" />

      <form onSubmit={submit} className="min-w-xl m-16 w-full p-3">
        <div className="max-w-xl m-3 bg-white">
          <h2 className="text-md font-semibold">Edit Student Account</h2>

          <div className="w-full   p-4 shadow sm:rounded-lg sm:p-8">
            <InputLabel value="Student name" />
            <TextInput
              type={"text"}
              className="w-full"
              name="name"
              value={data.name}
              onChange={(e) => {
                setData("name", e.target.value);
              }}
            />
          </div>
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <InputLabel value="Student email" />
            <TextInput
              type={"email"}
              name="email"
              className="w-full"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
            />
          </div>
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <PrimaryButton>Save</PrimaryButton>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
}
