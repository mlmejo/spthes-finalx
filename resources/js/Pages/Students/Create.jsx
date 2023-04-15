import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Select from "react-tailwindcss-select";

export default function Create({ auth, sections }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    section_id: "",
  });

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const change = (option) => {
    setData("section_id", option.value);
    setSelected(option);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("students.store"));
  };

  return (
    <AdminLayout auth={auth}>
      <Head title="Create Student Account" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <header>
              <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-800">
                <ul className="-mb-px flex flex-wrap">
                  <li class="mr-2">
                    <a
                      href={route("students.create")}
                      class={
                        "inline-block rounded-t-lg border-b-2 border-transparent p-2 hover:border-indigo-300 hover:text-indigo-600 " +
                        `${
                          route().current("students.create")
                            ? "border-indigo-300 text-indigo-600"
                            : ""
                        }`
                      }
                    >
                      Students
                    </a>
                  </li>
                  <li class="mr-2">
                    <a
                      href={route("teachers.create")}
                      class={
                        "inline-block rounded-t-lg border-b-2 border-transparent p-2 hover:border-indigo-300 hover:text-indigo-600 " +
                        `${
                          route().current("teachers.create")
                            ? "border-indigo-300 text-indigo-600"
                            : ""
                        }`
                      }
                    >
                      Teachers
                    </a>
                  </li>
                </ul>
              </div>

              <h2 className="text-lg font-medium text-gray-900">
                Create Student Account
              </h2>
            </header>
            <form onSubmit={submit} className="mt-4 space-y-4">
              <div className="max-w-xl">
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                  id="name"
                  name="name"
                  value={data.anme}
                  className="mt-1 block w-full"
                  autoComplete="name"
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                  required
                />

                <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="max-w-xl">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  autoComplete="username"
                  onChange={(e) => setData("email", e.target.value)}
                  required
                />

                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="max-w-xl">
                <InputLabel htmlFor="password" value="Password" />

                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) => setData("password", e.target.value)}
                  required
                />

                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="max-w-xl">
                <InputLabel
                  htmlFor="password_confirmation"
                  value="Confirm Password"
                />

                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  autoComplete="new-password"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                  required
                />

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />
              </div>

              <div className="max-w-xl">
                <InputLabel value="Section" />

                <Select
                  value={selected}
                  onChange={change}
                  options={sections.map((section) => {
                    return {
                      label: section.name,
                      value: section.id,
                    };
                  })}
                  isSearchable={true}
                  placeholder="Select Section"
                  classNames={{
                    menuButton: ({ isDisabled }) =>
                      `flex mt-1 py-0.5 text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                        isDisabled
                          ? "bg-gray-200"
                          : "bg-white hover:border-gray-400 focus:border-indigo-500 focus:ring focus:ring-indigo-500/20"
                      }`,
                    menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-gray-700",
                    listItem: ({ isSelected }) =>
                      `block transition duration-200 px-2 text-sm py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                          ? `text-white bg-indigo-500`
                          : `text-gray-500 hover:bg-indigo-100 hover:text-indigo-500`
                      }`,
                  }}
                />

                <InputError message={errors.section_id} className="mt-2" />
              </div>

              <PrimaryButton disabled={processing}>Create</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
